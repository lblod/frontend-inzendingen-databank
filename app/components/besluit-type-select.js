import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
  store: service(),

  async init() {
    this._super(...arguments);
    const options = this.store.query('besluit-type', {
      sort: 'label',
      page: { size: 1000 }
    });
    this.set('options', options);
  },

  async didReceiveAttrs() {
    this._super(...arguments);
    if (this.value && !this.selected) {
      const besluitTypes = await this.value.split(",").map(id => this.store.findRecord('besluit-type', id));
      this.set('selected', besluitTypes);
      this.onInit(besluitTypes);
    } else if (!this.value) {
      this.set('selected', null);
    }
  },

  selected: null,
  value: null, // id of selected record
  onInit: null,
  onSelectionChange: null,

  search: task(function* (term) {
    yield timeout(600);
    return this.store.query('besluit-type', {
      filter: { label: term }
    });
  }),

  actions: {
    changeSelected(selected) {
      this.set('selected', selected);
      this.onSelectionChange(selected);
    }
  }
});
