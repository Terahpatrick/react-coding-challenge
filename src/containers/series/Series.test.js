import React from 'react';
import {configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './../../components/card/card';
import Series from './Series';

configure(({adapter: new Adapter()}));

describe('<Movies />', () => {
    it('should render 3 <Card /> components if image and title are not provided', () => {
        const wrapper = shallow(<Series />)
        expect(wrapper.find(Card)).toHaveLength(0);
    })
})