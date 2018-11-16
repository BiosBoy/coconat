import { COUNT_ADD } from '../constants';

const addCount = count => ({
  type: COUNT_ADD,
  count
});

export { addCount };
