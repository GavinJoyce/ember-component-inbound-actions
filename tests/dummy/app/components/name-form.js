import Em from 'ember';
import Receiver from 'ember-component-inbound-actions/receiver';

export default Em.Component.extend(Receiver, {
  name: 'Larry David',
  actions: {
    reset: function(...params) {
      this.set('name', '');

      if (params.length) {
        this.set('shouldShowParams', true);
        this.set('params', params.join(', '));
      }
    }
  },

  didRender() {
    this._super(...arguments);

    console.log('GJ: didRender name (😄 no initial double render)');
  }
});
