import { helper } from '@ember/component/helper';

export default helper(([target, action, ...params]) => {
  return () => {
    target.send(action, ...params);
  };
});
