import React from 'react';
import { shallow } from 'enzyme';
import InputElement from 'react-input-mask';
import { validate as validateCPF } from "gerador-validador-cpf";
import Contact from '../Contact';

// usar mount, wrapper dentro de cada teste mesmo que repita, 

describe('<Contact />', () => {
  const wrapper = shallow(<Contact />);
  console.log(wrapper.debug());

  it('renders correctly', () => {
    expect(wrapper).toBeDefined();
  });

  it('contains a form', () => {
    expect(wrapper.find(<div className="form-container"></div>)).toBeDefined();
  });

  it('input "cpf" returns formatted accordingly', () => {
    const cpf = wrapper.find(<InputElement id="contact-user-cpf" />);
    cpf.value = '12345678999';

    expect(cpf.value).toEqual('12345678999'); // como devo testar aqui? a mask não modifica o valor do input original?
  })

  it('calls an alert when "cpf" is invalid', () => {
    const cpf = wrapper.find(<InputElement id="contact-user-cpf" />);
    expect(cpf.length).toEqual(1);

    cpf.simulate('blur', { target: { value: "999999999" } });

    expect(validateCPF).toHaveBeenCalled();
  });

  it('input "email" receives a string', () => {
    const input = wrapper.find(<input id="contact-user-email" />);
    input.value = 'bla@blabla.com';

    expect(input.value).toEqual('bla@blabla.com');
    expect(input.value).not.toEqual(123456789);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

/*
 -Só posso usar enzyme com componentes que são classes? Como utilizar com consts / funções sem o configure do enzyme reclamar?
 
 */