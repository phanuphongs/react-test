import { shallow } from 'enzyme';
import React from 'react';
import Scroll from "./scroll";

it('expect to render Scroll component', () => {
    expect(shallow(<Scroll />)).toMatchSnapshot( )
})
