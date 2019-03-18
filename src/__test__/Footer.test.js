import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);

  it('renders correctly', () => {
    expect(wrapper.find(<footer id="footer"></footer>)).toBeDefined();
    expect(wrapper.find(<div className="footer-message"></div>)).toBeDefined();
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});



// nesse caso não estou testando exatamente o texto contido no footer (children), né? só o snapshot do componente :thinking: 