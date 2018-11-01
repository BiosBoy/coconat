// TODO: Remove these polyfills once the below issue is solved.
// It present here to allow Jest work with the last React environment.
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582
global.requestAnimationFrame = cb => {
  setTimeout(cb, 0);
};

global.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: () => {},
    removeListener: () => {}
  };
};

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
