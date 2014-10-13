import Em from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Em.Component.extend(InboundActions, {
  name: 'Larry David',
  actions: {
    reset: function() {
      this.set('name', '');
    }
  }
});
