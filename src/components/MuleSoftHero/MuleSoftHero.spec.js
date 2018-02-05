import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import MuleSoftHero from './MuleSoftHero';

describe('MuleSoftHero unit tests', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<MuleSoftHero />);
    expect(wrapper).toBeTruthy();
  });
});
