import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.plural(/$/,'en');
inflector.plural(/e$/,'es');
inflector.plural(/e([lnr])$/,'e$1s');
inflector.plural(/([aiuo])$/,'$1s');
inflector.plural(/([^aiuoe])([aiuo])([a-z])$/,'$1$2$3$3en'); // TODO: this is a bit hack
inflector.plural(/uis$/,'uizen');
inflector.plural(/ief$/,'ieven');
inflector.plural(/or$/,'oren');
inflector.plural(/ie$/,'ies');
inflector.plural(/eid$/,'eden');
inflector.plural(/aa([a-z])$/,'a$1en');
inflector.plural(/uu([a-z])$/,'u$1en');
inflector.plural(/oo([a-z])$/,'o$1en');
inflector.singular(/en$/,'');
inflector.singular(/es$/,'e');
inflector.singular(/e([lnr])s$/,'e$1');
inflector.singular(/([aiuo])s$/,'$1');
inflector.singular(/([^aiuoe])([aiuo])([a-z])\3en$/,"$1$2$3"); // TODO: this is a bit hack
inflector.singular(/uizen$/,'uis');
inflector.singular(/ieven$/,'ief');
inflector.singular(/ies$/,'ie');
inflector.singular(/eden$/,'eid');
inflector.singular(/a([a-z])en$/,'aa$1');
inflector.singular(/u([a-z])en$/,'uu$1');
inflector.singular(/o([a-z])en$/,'oo$1');
inflector.singular(/([auio])s$/,'$1s');
inflector.irregular('file', 'files');
inflector.irregular('document-status', 'document-statuses');
inflector.irregular('inzending-voor-toezicht', 'inzendingen-voor-toezicht');
inflector.irregular('toezicht-account-acceptance-status', 'toezicht-account-acceptance-statuses');
inflector.irregular('toezicht-fiscal-period', 'toezicht-fiscal-periods');
inflector.irregular('form-solution', 'form-solutions');
inflector.irregular('dynamic-subform', 'dynamic-subforms');
inflector.irregular('form-input', 'form-inputs');
// Meet Ember Inspector's expectation of an export
export default {};