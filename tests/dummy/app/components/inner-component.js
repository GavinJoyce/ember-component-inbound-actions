import Em from 'ember';

export default Em.Component.extend({

  count: 0,

  getName() {
    let count = this.incrementProperty('count');
    return "Gavin " + this.get('count');
  }

});
