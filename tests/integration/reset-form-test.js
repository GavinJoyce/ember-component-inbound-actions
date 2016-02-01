import Em from 'ember';
import startApp from 'dummy/tests/helpers/start-app';

var app;

module('Integration', {
  setup: function() {
    app = startApp();
  },
  teardown: function() {
    Em.run(app, 'destroy');
  }
});

test('the component are reset', function() {
  expect(4);

  visit('/');
  andThen(function() {
    let name = findWithAssert('input.name').val();
    let address = findWithAssert('textarea.address').val();
    equal(name, 'Larry David');
    equal(address, '1 The Blade, Mudpark, Gallinteer, Bublin 16');
  });
  click('button');
  andThen(function() {
    let name = findWithAssert('input.name').val();
    let address = findWithAssert('textarea.address').val();
    equal(name, '', 'The name should have been reset');
    equal(address, '', 'The address should have been reset');
  });
});
