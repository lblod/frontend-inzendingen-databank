export default class Snapshot {
  base = null;
  future = null;

  constructor( base ) {
    this.base = base;
  }

  stage( object ) {
    this.future = Object.assign( object, {} );
  }

  stageLive( object ) {
    this.future = object;
  }

  commit() {
    this.base = Object.assign( this.future, {} );
  }

  fieldChanged(field) {
    if( !this.hasBase || !this.hasStaging ) {
      return this.baseOrEmpty.hasOwnProperty(field) || this.futureOrEmpty.hasOwnProperty(field);
    } else {
      return this.base[field] != this.future[field];
    }
  }

  get hasBase() {
    return this.base && true;
  }

  get hasStaging() {
    return this.future && true;
  }

  get committed() {
    return this.base;
  }

  get baseOrEmpty() {
    return this.base || {};
  }

  get futureOrEmpty() {
    return this.future || {};
  }
}