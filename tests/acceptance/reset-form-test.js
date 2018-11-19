import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, click } from '@ember/test-helpers';

module('Acceptance tests', function(hooks) {
  setupApplicationTest(hooks);

  test('the component are reset', async function(assert) {
    await visit('/');
    assert.dom('input.name').hasValue('Larry David');
    assert.dom('textarea.address').hasValue('1 The Blade, Mudpark, Gallinteer, Bublin 16');
    await click('#controller');
    assert.dom('input.name').hasNoValue('The name should have been reset');
    assert.dom('textarea.address').hasNoValue('The address should have been reset');
  });

  test('the send helper sends action with params', async function(assert) {
    await visit('/');
    await click('#send');
    assert.dom('input.name').hasNoValue('The name should have been reset');
    assert.dom('#params').hasText('param1, param2', 'The action is sent params');
  });
});