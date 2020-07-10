import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';
import {inject as service} from '@ember/service';

export default class UserSearchQueriesIndexRoute extends Route.extend(
  DataTableRouteMixin) {

  @service currentSession;

  modelName = 'search-query';

  async beforeModel() {
    this.user = await this.currentSession.user;
  }

  mergeQueryOptions() {
    return {
      'filter[user][:uri:]' : this.user.uri
    }
  }

}
