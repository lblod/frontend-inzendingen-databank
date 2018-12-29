import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  description: attr(),
  status: belongsTo('melding-status', { inverse: 'meldingen' }),
  inzendingVoorToezicht: belongsTo('inzending-voor-toezicht', { inverse: 'melding' })
});