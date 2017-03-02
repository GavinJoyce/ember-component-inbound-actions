import Em from 'ember';
import Sender from 'ember-component-inbound-actions/sender';

export default Em.Controller.extend(Sender, {
  actions: {
    reset: function() {
      console.log(`GJ: sending actions...`);

      //the old way
      this.get('addressForm').send('reset');

      //the new (experimental) way
      this.sendTo('name-form', 'reset', 1, 2, 3);
    }
  }
});
