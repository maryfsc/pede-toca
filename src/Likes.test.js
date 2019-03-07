import React from 'react';
import TestRenderer from 'react-test-renderer';
import Likes from './Likes';

test('Renders a button and badge with like count', () => {
    const createTest = TestRenderer.create(<Likes />);

    let tree = createTest.toJSON();
    
    const testLikes = createTest.root;
    
    tree = createTest.toJSON(); // <-- atualiza o snapshot?
    expect(testLikes.findByType("button")).toBeTruthy();  // espera encontrar um button e retorne true
    expect(testLikes.findByType("span")).toBeTruthy();  // espera encontrar um span ('badge') e retorne true
    
    // tree.props.onClick(); // <-- isso não deveria dar trigger no evento para teste? retorna 'is not a function' (pq é um callback, será?)
    // tree = createTest.toJSON(); // atualiza snapshot após trigger do evento
    // expect(testLikes.children).toBe(1); // ????? sei não, viado

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

/* Dúvidas, muitas dúvidas!!
  0) Pelo que entendi, mock vai apenas "simular" algum componente ou chamada na hora do teste, é isso?
  1) Quando usar mock? Como decidir isso?
  2) O quanto mock é confiável na hora de fazer os testes? Não é misleading?
  3) Como decidir qual lib de testes usar? Como aprender a usar os métodos da lib escolhida? É confusoooo
  4) Dá pra usar duas ou mais libs pra testar? Isso é uma boa prática?
  5) Como testar funções callback?
  6) Como mockar uma função? Tem um método do jest pra isso pelo que entendi, mas não entendi como funciona
*/