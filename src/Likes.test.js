import React from 'react';
import TestRenderer from 'react-test-renderer';
import Likes from './Likes';

test('renders correctly', () => {
    const createTest = TestRenderer.create(<Likes />);

    let tree = createTest.toJSON();
    
    const testLikes = createTest.root;
  
    expect(testLikes.findByProps({className: "btn btn-secondary"})).toBeDefined();  // espera encontrar um button e retorne true
    expect(testLikes.findByProps({className: "badge badge-secondary"})).toBeDefined(); // espera encontrar todas instâncias com classname 'badge' (01 no caso) e que sejam definidas
    expect(testLikes.findByType("button").children).toContainEqual('Like'); // ????? sei não

    // tree.props.onClick(); // <-- isso não deveria dar trigger no evento para teste? retorna 'is not a function' (pq é um callback, será?)
    // tree = createTest.toJSON(); // atualiza snapshot após trigger do evento
    // testLikes.find("button").simulate('click');
    expect(tree).toMatchSnapshot();    
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
    - estudar como mockar com jest;
    - diferenças entre mock x spy;
    - como testar o chamamento de uma função;
    - mudar [?] a lib pra alguma que atenda as necessidades da aplicação (enzyme?);
*/