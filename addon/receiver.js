import Em from 'ember';
import { registerReceiver, unregisterReceiver } from './registry';

export default Em.Mixin.create({
  init() {
    this._super(...arguments);
    registerReceiver(this);
  },

  willDestroyElement() {
    this._super(...arguments);
    unregisterReceiver(this);
  }
});
