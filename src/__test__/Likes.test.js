import React from 'react';
import { shallow } from 'enzyme';
import Likes from '../Likes';

describe('<Likes />', () => {
  const wrapper = shallow(<Likes />);

  it('renders correctly', () => {

    expect(wrapper.find(<div className="likes-wrapper"></div>)).toBeDefined();
    expect(wrapper.find(<span className="badge badge-secondary" />)).toBeDefined(); 
    // expect(wrapper.find(<button className="btn btn-secondary" />).contains('Like')).toBeTruthy(); // ????? 
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  // it('updates count likes when the button is clicked', () => {
  //   const button = wrapper.find(<Button />);
  //   const badge = wrapper.findWhere(node => node.InnerText === '0');

  //   button.simulate('click'); // error: Method “simulate” is meant to be run on 1 node. 0 found instead.

  //   expect(badge.contains(1)).toBeTruthy();
  // });
});

/*
Summary of React Tests:    
  Find your Component Contract first
  Decide which constraints are worth testing and which aren’t
  Prop types are not worth testing
  Inline styles are usually not worth testing
  The components you render and what props you give them are important to test
  Don’t test things that are not the concern of your component
*/

/* 
  5) Como testar funções callback?
  6) Como mockar uma função? Tem um método do jest (jest.fn() ?) pra isso pelo que entendi, mas não entendi como funciona

  To Do:
    - estudar como mockar com jest (done);
      -shallow do Enzyme é como se fosse um mock?
    
    - diferenças entre mock x spy (done):
      -Mock é possível de ser construído 'do nada', criando uma classe inteira e métodos para teste. 
      -Spy é usado pra selecionar geralmente uma parte da classe que será testada e utiliza métodos REAIS, "espiando" o objeto real em questão; 
    
    - como testar o chamamento de uma função;
    
    - mudar [?] a lib pra alguma que atenda as necessidades da aplicação (enzyme?)(done);
      -escolhi enzyme;
*/