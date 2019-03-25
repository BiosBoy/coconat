import React from 'react';
import { mount } from 'enzyme';

import initialState from './mocks/body';

import Body from '../components/Body';

describe('<Body Component Test />', () => {
  it('should render basic Body Component with an image', () => {
    const Component = mount(<Body {...initialState} />);

    expect(Component.find('.button').length).toBe(1);
    expect(Component.find('.bodyImg').length).toBe(1);

    expect(Component).toMatchSnapshot();
  });
});
