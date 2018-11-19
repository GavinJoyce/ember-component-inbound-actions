import { schedule } from '@ember/runloop';
import { on } from '@ember/object/evented';
import Mixin from '@ember/object/mixin';
import { VERSION } from '@ember/version';
import ActionProxy from './action-proxy';

let scheduleInAfterRender = /^1\.13|^[2-9]/.test(VERSION);

export default Mixin.create({
  _inbound_actions_setup: on('init', function() {
    this._inbound_actions_maybeScheduleInAfterRender(() => {
      var proxy = ActionProxy.create({ target: this });
      this.set('actionReceiver', proxy);
    });
  }),
  _inbound_actions_maybeScheduleInAfterRender: function(fn) {
    if (scheduleInAfterRender) {
      schedule('afterRender', this, fn);
    } else {
      fn();
    }
  },
  onDestroy: on('willDestroyElement', function() {
    this.set('actionReceiver', null);
  })
});
