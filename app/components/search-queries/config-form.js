import SearchQueriesFormComponent from "./form";

import {task} from 'ember-concurrency-decorators';

const CONFIG_FORM_UUID = 'ebd65df9-5566-47c2-859a-ceff562881ab'

export default class SearchQueriesConfigFormComponent extends SearchQueriesFormComponent {

  constructor(owner, args) {
    super(CONFIG_FORM_UUID, owner, args);
  }

  async loadData(form) {
    await super.loadData(form);
    await this.loadSource(this.args.query)
  }

  @task
  * save() {
    yield this.saveSource(this.args.query);
  }
}
