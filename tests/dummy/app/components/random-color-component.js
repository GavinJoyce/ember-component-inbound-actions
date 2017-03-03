import Em from 'ember';
import Receiver from 'ember-component-inbound-actions/receiver';

const COLORS = [
  'white',
  'red',
  'blue',
  'green',
  'pink',
  'purple',
  'orange'
];

export default Em.Component.extend(Receiver, {
  classNames: 'random-color',
  classNameBindings: ['backgroundColor', 'actionReceiverName'],
  count: 0,

  init() {
    this._super(...arguments);
    this.setRandomColor();
  },

  click() {
    this.get('onClick')();
  },

  actions: {
    changeColor() {
      this.incrementProperty('count');
      this.setRandomColor();
    }
  },

  setRandomColor() {
    let backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.set('backgroundColor', backgroundColor);
  }
});
