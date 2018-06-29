import { shallow } from 'enzyme';
import React from 'react';
import Card from './card';

it('expect to render Card component', () => {
    expect(shallow(<Card />)).toMatchSnapshot( )
})
