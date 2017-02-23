import { helper } from 'ember-helper';

export default helper(([target, action, ...params]) => {
  return () => {
    target.send(action, ...params);
  };
});
