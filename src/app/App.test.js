import React from 'react';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './index';

configure({ adapter: new Adapter() });
describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(ApolloProvider)).toHaveLength(1);
  });
  it('matches the snapshot', () => {
    const tree = toJson(mount(<App />));
    expect(tree).toMatchSnapshot();
  });
});
