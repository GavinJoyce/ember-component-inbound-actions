import { test } from 'qunit';
import moduleForAcceptance from 'dummy/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance tests');

test('clicking on a component changes the sibling component', function(assert) {
  assert.expect(3);

  visit('/siblings');
  andThen(function() {
    let counts = findWithAssert('h2.count').text();
    assert.equal(counts, '[Count is 0][Count is 0]');
  });
  click('.ember-view .left');
  andThen(function() {
    let counts = findWithAssert('h2.count').text();
    assert.equal(counts, '[Count is 0][Count is 1]');
  });
  click('.ember-view .right');
  andThen(function() {
    let counts = findWithAssert('h2.count').text();
    assert.equal(counts, '[Count is 1][Count is 1]');
  });
});
