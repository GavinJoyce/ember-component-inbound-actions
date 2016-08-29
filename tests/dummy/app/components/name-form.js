import Em from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Em.Component.extend(InboundActions, {
  name: 'Larry David',
  actions: {
    reset: function() {
      this.set('name', '');
    },

    getName() {
      //TODO: lookup magic
      // let name = this.childViews[1].getName();
      // alert(name);

      let innerComponent = this._getChildComponent(this, 'inner-component');
      let name = innerComponent.getName();
      alert(name);
    }
  },

  _getChildComponent(component, componentPath) {
    return this._getChildComponents(component, componentPath)[0];
  },

  _getChildComponents(component, componentPath) {
    return component.childViews.filter((child) => {
      let parts = child._debugContainerKey.split('component:');
      return parts[1] === componentPath;
    });
  }
});
