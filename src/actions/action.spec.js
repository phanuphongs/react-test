import * as actions from './action';
import { CHANGE_QUERY, REQUEST_ROBOTS } from "./constants";

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware])

describe('Set Query', () => {
    it('should create an action to search robots', () => {
        const expectedAction = {
            type: CHANGE_QUERY,
            payload: 'yay',
        }
        expect(actions.setQuery('yay')).toEqual(expectedAction)
    })
})

describe('Request Robot', () => {
    it('handle requesting robot API', () => {
        const store = mockStore()
        store.dispatch(actions.requestRobots())
        const expectedAction = [
            { type: REQUEST_ROBOTS }
        ]
        expect(store.getActions()).toEqual(expectedAction)
    })
})
