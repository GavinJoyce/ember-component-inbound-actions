import Em from 'ember';
import ActionProxy from './action-proxy';

let scheduleInAfterRender = /^1\.13|^[2-9]/.test(Em.VERSION);

export default Em.Mixin.create({
  _inbound_actions_setup: Em.on('init', function() {
    this._inbound_actions_maybeScheduleInAfterRender(() => {
      var proxy = ActionProxy.create({ target: this });
      this.set('actionReceiver', proxy);
    });
  }),
  _inbound_actions_maybeScheduleInAfterRender: function(fn) {
    if (scheduleInAfterRender) {
      Em.run.schedule('afterRender', this, fn);
    } else {
      fn();
    }
  }
});
