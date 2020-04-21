import Model, { attr, hasMany } from '@ember-data/model';

export const VLABEL_TYPE = 'https://data.vlaanderen.be/id/concept/BesluitType/b2d0734d-13d0-44b4-9af8-1722933c5288';
export const VLABEL_CHART_OF_ACCOUNTS = [
  '26c19fe6b53e2e759a0b9467ce33ef37fc268dd9467cfba91381214549a01d19',
  'fad34acdd5a6d17b59d58678542b65e9c364d2c84bf49fea8611ecc2d6ce3411',
  '514defe410ee9b1b6e01433fbbca7ce16c48d24f0785c1f3c2cb86c44af3e50a'
];

export default class ConceptModel extends Model {
  @attr uri
  @attr label
  @hasMany("concept-scheme", { inverse: null }) conceptSchemes
  @hasMany("concept-scheme", { inverse: null }) topConceptSchemes

  get isRegulation() {
    return this.uri === 'https://data.vlaanderen.be/id/concept/BesluitType/67378dd0-5413-474b-8996-d992ef81637a';
  }

}
