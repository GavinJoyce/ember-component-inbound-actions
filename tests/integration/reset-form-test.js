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
  click('button');
  andThen(function() {
    let name = findWithAssert('input.name').val();
    let address = findWithAssert('textarea.address').val();
    assert.equal(name, '', 'The name should have been reset');
    assert.equal(address, '', 'The address should have been reset');
  });
});
