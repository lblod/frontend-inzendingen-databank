import JSONAPISerializer from '@ember-data/serializer/json-api';
import DataTableSerializerMixin from 'ember-data-table/mixins/serializer';

export default JSONAPISerializer.extend(DataTableSerializerMixin, {

});
