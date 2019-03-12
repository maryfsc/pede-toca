import React from 'react';
import { shallow, mount } from 'enzyme';
import Contact from '../Contact';

describe('<Contact />', () => {
  it('renders without throwing an error', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toBeDefined();
  });

  it('contains a form', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper.find(<div className="form-container"></div>)).toBeDefined();
  });

  it('input "email" receives a string', () => {
    const wrapper = shallow(<Contact />);
    const input = wrapper.find(<input id="contact-user-email" />);
    input.value = 'bla@blabla.com';

    expect(input.value).toEqual('bla@blabla.com');
    expect(input.value).not.toEqual(123456789);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<Contact />);
    expect(wrapper).toMatchSnapshot();
  });
});

/*
 -Só posso usar enzyme com componentes que são classes? Como utilizar com consts / funções?
 */