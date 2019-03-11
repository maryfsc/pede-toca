import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

test('Footer renders and contains disclaimer string', () => {
  const component = renderer.create(
    <Footer />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


// nesse caso não estou testando exatamente o texto contido no footer (children), né? só o snapshot do componente :thinking: 