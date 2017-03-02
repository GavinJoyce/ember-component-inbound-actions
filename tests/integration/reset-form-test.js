import { test } from 'qunit';
import moduleForAcceptance from 'dummy/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance tests');

test('the component are reset', function(assert) {
  assert.expect(4);

  visit('/');
  andThen(function() {
    let name = findWithAssert('input.name').val();
    let address = findWithAssert('textarea.address').val();
    assert.equal(name, 'Larry David');
    assert.equal(address, '1 The Blade, Mudpark, Gallinteer, Bublin 16');
  });
  click('#reset-from-action');
  andThen(function() {
    let name = findWithAssert('input.name').val();
    let address = findWithAssert('textarea.address').val();
    assert.equal(name, '', 'The name should have been reset');
    assert.equal(address, '', 'The address should have been reset');
  });
});

test('the send helper sends action with params', function(assert) {
  assert.expect(2);

  visit('/');

  click('#send-from-template');

  andThen(function() {
    let name = findWithAssert('textarea.address').val();
    assert.equal(name, '', 'The address should have been reset');

    let params = findWithAssert('#address-params').text();
    assert.equal(params, 'param1, param2', 'The action is sent params');
  });
});
