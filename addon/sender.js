import Ember from 'ember';
import { lookupReceiver } from './registry';

export default Ember.Mixin.create({
  sendTo(name, ...args) {
    let receiver = lookupReceiver(this, name);
    receiver.send(...args);
  }
});
