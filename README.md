# ember-component-inbound-actions

Send actions to Ember.js components. Inspired by [Sam Selikoff's blog post](http://www.samselikoff.com/blog/2014/05/16/getting-ember-components-to-respond-to-actions/)

Questions? Ping me [@gavinjoyce](https://twitter.com/gavinjoyce)

## Installation

This is an Ember CLI addon, so all you need to do is

`npm install --save-dev ember-component-inbound-actions`
or
`ember install ember-component-inbound-actions`

## Usage Instructions

Add the `InboundActions` mixin to your component:

```javascript
import Em from 'ember';
import InboundActions from 'ember-component-inbound-actions/inbound-actions';

export default Em.Component.extend(InboundActions, {
  name: 'Larry David',
  actions: {
    reset: function() {
      this.set('name', '');
    }
  }
});
```

When declaring your component in a template, include an `actionReceiver` attribute:

```handlebars
{{name-form actionReceiver=nameForm}}
```

This allows you to reference the `nameForm` in your controller and invoke actions on it:

```javascript
this.get('nameForm').send('reset');
```

## Development Instructions

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.
