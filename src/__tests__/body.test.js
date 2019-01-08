import React from 'react';
import { mount } from 'enzyme';

import initialState from './mocks/body';

import { Body } from '../components';

describe('<Body Component Test />', () => {
  it('should render basic Body Component with an image', () => {
    const Component = mount(<Body {...initialState} />);

    expect(Component.find('.body').length).toBe(1);
    expect(Component.find('.bodyImage').length).toBe(1);

    expect(Component).toMatchSnapshot();
  });
});
