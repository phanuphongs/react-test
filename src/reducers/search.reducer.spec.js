import {
    CHANGE_QUERY,
} from '../actions/constants';

import * as reducer from './search.reducer';

describe('search robots', () => {
    it('should return the initial state', () => {
        expect(reducer.searchRobots(undefined, {})).toEqual( { query: '' })
    })

    it('should return the CHANGE_QUERY', () => {
        expect(reducer.searchRobots(undefined, {
            type: CHANGE_QUERY,
            payload: 'abc'
        })).toEqual( { query: 'abc' })
    })
})