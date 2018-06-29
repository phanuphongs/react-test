import { shallow } from 'enzyme';
import React from 'react';
import CardList from "./card-list";

it('expect to render Card List component', () => {
    const mockData = [
        {
            id: 1,
            name: 'John Walker',
            email: 'johnwalker@gmail.com',
        }
    ]
    expect(shallow(<CardList robots={mockData}/>)).toMatchSnapshot( )
})
