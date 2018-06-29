import { shallow } from 'enzyme';
import React from 'react';
import Robo from "./robo";


let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        query: '',
        isPending: false,
    }
    wrapper = shallow(<Robo {...mockProps}/>)
})


it('expect to render Robo component', () => {
    expect(wrapper).toMatchSnapshot( )
})

it('filters robots correctly', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'john Walker',
            email: 'john@gmail.com'
        },
        {
            id: 2,
            name: 'Ashe Doe',
            email: 'ashe@gmail.com'
        }
    ]
    let query = ''
    expect(wrapper.instance().filterRobot(mockRobots, query)).toEqual(mockRobots)
    query = 'walker'
    expect(wrapper.instance().filterRobot(mockRobots, query)).toEqual([mockRobots[0]])
    query = 'erere'
    expect(wrapper.instance().filterRobot(mockRobots, query)).toEqual([])
})