import Model, { attr } from '@ember-data/model';

export default class SearchQueryModel extends Model {
  @attr() uri;
  @attr() label;
  @attr() comment;
  @attr('datetime', {
    defaultValue(){ return new Date();}
  }) created;
}
