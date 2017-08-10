import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import NavbarLink from './navbarLink.component.jsx'

const wrapper = shallow(<NavbarLink uri='' altText='test'/>);

describe('<NavbarLink/>', function() {
  it('Should have an image', function() {
    expect(wrapper.find('img')).to.have.length(1);
  });

  it('Should have alt text for the image', function() {
    expect(wrapper.find('img').props().alt).to.not.be.undefined;
  });

  it('Should have a description text', function() {
    expect(wrapper.find('h2')).to.have.length(1);
  })
});
