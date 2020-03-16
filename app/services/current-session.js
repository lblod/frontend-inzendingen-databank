import Service, { inject as service } from '@ember/service';
import { get, computed } from '@ember/object';
import { task, waitForProperty } from 'ember-concurrency';

export default Service.extend({
  session: service('session'),
  store: service('store'),

  async load() {
    if (this.get('session.isAuthenticated')) {
      const session = this.session;
      const account = await this.store.find('account', get(session, 'data.authenticated.relationships.account.data.id'));
      const user = await account.get('gebruiker');
      const group = await this.store.find('bestuurseenheid', get(session, 'data.authenticated.relationships.group.data.id'));
      const roles = await get(session, 'data.authenticated.data.attributes.roles');
      this.set('_account', account);
      this.set('_user', user);
      this.set('_roles', roles);
      this.set('_group', group);

      // The naming is off, but account,user,roles are taken for the
      // promises in a currently public API.
      this.setProperties({
        accountContent: account,
        userContent: user,
        rolesContent: roles,
        groupContent: group
      });

      this.set('canReadVlabel', this.canAccess('ABBDatabankToezicht-DatabankToezichtVLABEL'));
      this.set('canRead', this.canAccess('ABBDatabankToezicht-DatabankToezichtLezer') || this.canAccess('ABBDatabankToezicht-DatabankToezichtEditeur'));
      this.set('canWrite', this.canAccess('ABBDatabankToezicht-DatabankToezichtEditeur'));
    }
  },
  canAccess(role) {
    return this._roles.includes(role);
  },
  // constructs a task which resolves in the promise
  makePropertyPromise: task(function * (property) {
    yield waitForProperty(this, property);
    return this.get(property);
  }),
  // this is a promise
  account: computed('_account', function() {
    return this.makePropertyPromise.perform('_account');
  }),
  // this contains a promise
  user: computed('_user', function() {
    return this.makePropertyPromise.perform('_user');
  }),
  // this contains a promise
  group: computed('_group', function() {
    return this.makePropertyPromise.perform('_group');
  })
});
