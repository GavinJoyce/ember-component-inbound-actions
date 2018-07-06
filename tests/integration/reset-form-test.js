import { module, test } from 'qunit';
import { visit, find, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | reset-form', function(hooks) {
  setupApplicationTest(hooks);

  test('the component are reset', async function(assert) {
    assert.expect(4);
  
    await visit('/');
    let name = find('input.name').value;    
    let address = find('textarea.address').value;

    assert.equal(name, 'Larry David');
    assert.equal(address, '1 The Blade, Mudpark, Gallinteer, Bublin 16');

    await click('#controller');
    name = find('input.name').value;
    address = find('textarea.address').value;
    
    assert.equal(name, '', 'The name should have been reset');
    assert.equal(address, '', 'The address should have been reset');
  });

  test('the send helper sends action with params', async function(assert) {
    assert.expect(2);
  
    await visit('/');  
    await click('#send');

    let name = find('input.name').value;
    assert.equal(name, '', 'The name should have been reset');
    
    let params = find('#params').textContent;
    assert.equal(params, 'param1, param2', 'The action is sent params');
  });
});




