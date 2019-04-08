import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  label: attr(),
  decidableBy: hasMany('bestuurseenheid-classificatie-code', { inverse: null }),
  uri: attr()
});
