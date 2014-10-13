import Em from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Em.Component.extend(InboundActions, {
  address: '1 The Blade, Mudpark, Gallinteer, Bublin 16',
  actions: {
    reset: function() {
      this.set('address', '');
    }
  }
});
