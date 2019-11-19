import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    const inzendingen = await this.store.query('inzending-voor-toezicht', {
      filter: {
        id: params.id
      },
      include: [
        'status',
        'last-modifier',
        'bestuurseenheid',
        'inzending-type',
        'besluit-type',
        'bestuursorgaan',
        'tax-rates'
      ].join(',')
    });
    return inzendingen.firstObject;
  }
});