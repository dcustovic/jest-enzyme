import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

// setup, functions
const setup = () => shallow(<App />);
const findByAttr = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`)
}


test('Render app without crashing', () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1);
});


test('Render button', () => {
  const wrapper = setup();
  const button = findByAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1);
});


test('Render counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1);
});
