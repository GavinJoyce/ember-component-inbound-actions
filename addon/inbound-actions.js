import Em from 'ember';
import ActionProxy from './action-proxy';

export default Em.Mixin.create({
  _inbound_actions_setup: function() {
    Em.run.schedule('afterRender', this, function() {
      var proxy = ActionProxy.create({ target: this });
      this.set('actionReceiver', proxy);
    });
  }.on('init')
});
