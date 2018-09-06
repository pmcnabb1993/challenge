/* eslint-disable react/jsx-indent */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Navbar from '../../../src/components/Navbar';
import logo from '../../static/Moove_It-Logo_W.png';

describe('Navbar', () => {
  it('renders without crashing', () => {
    const isLoggedIn = true;
    const onClick = jest.fn();
    const user = {};

    mount(<Navbar />);
  });

  it('contains an <a/> anchor element wrapped around <img/> logo', () => {
  	const wrapper = shallow(Navbar />);
  	expect(wrapper.find('a').contains(<img className="mooveItNavybg pt4 mt2 h1" src={logo} alt="Moove-it logo" />)).toEqual(true);

  });

  it('contains the correct href link', () => {
  	const wrapper = shallow(Navbar />);
  	expect(wrapper.find('a').prop('href')).toEqual('https://www.moove-it.com');
  });

  it ('contains the correct target _blank to open new window', () => {
  	const wrapper = shallow(Navbar />);
  	expect(wrapper.find('a').prop('target')).toEqual('_blank');
  });

});
