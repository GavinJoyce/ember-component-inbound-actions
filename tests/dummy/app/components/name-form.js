import Component from '@ember/component';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Component.extend(InboundActions, {
  name: 'Larry David',
  actions: {
    reset: function(...params) {
      this.set('name', '');

      if (params.length) {
        this.set('shouldShowParams', true);
        this.set('params', params.join(', '));
      }
    }
  }
});
