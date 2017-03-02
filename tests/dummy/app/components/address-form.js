import Em from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Em.Component.extend(InboundActions, {
  address: '1 The Blade, Mudpark, Gallinteer, Bublin 16',
  actions: {
    reset: function(...params) {
      this.set('address', '');

      if (params.length) {
        this.set('shouldShowParams', true);
        this.set('params', params.join(', '));
      }
    }
  },

  didRender() {
    this._super(...arguments);

    console.log('GJ: didRender address (😱 initial double render)');
  }
});
