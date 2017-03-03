import Em from 'ember';
import Sender from 'ember-component-inbound-actions/sender';

export default Em.Component.extend(Sender, {
  actions: {
    changeLeftBackground() {
      this.sendTo('left', 'changeColor');
    },

    changeRightBackground() {
      this.sendTo('right', 'changeColor');
    },
  }
});
