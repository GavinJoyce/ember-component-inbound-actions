import Component from '@ember/component';

export default Component.extend({
  actions: {
    reset: function() {
      //send a `reset` action to both components
      this.get('nameForm').send('reset');
      this.get('addressForm').send('reset');
    }
  }
});
