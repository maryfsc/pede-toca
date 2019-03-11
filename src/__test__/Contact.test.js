import React from 'react';
import { shallow } from 'enzyme';
import Contact from '../Contact';

describe('<Contact />', () => {
  it('renders without throwing an error', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toBeDefined();
  });

  it('contains a form', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.contains(<form></form>)).toBeTruthy();
  });
});

/*
 -Só posso usar enzyme com componentes que são classes? 
 */