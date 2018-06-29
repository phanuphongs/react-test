import {
    REQUEST_ROBOTS,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../actions/constants';

import * as reducer from './request.reducer';

describe('request robots', () => {
    it('should return the initial state', () => {
        const initialState = {
            error: null,
            isPending: false,
            robots: [],
        }
        expect(reducer.requestRobots(undefined, {})).toEqual(initialState)
    })

    it('should handle the REQUEST_ROBOTS', () => {
        const result = {
            error: null,
            isPending: true,
            robots: [],
        }
        expect(reducer.requestRobots(undefined, {
            type: REQUEST_ROBOTS
        })).toEqual(result)
    })

    it('should handle the REQUEST_ROBOTS_SUCCESS', () => {
        const result = {
            error: null,
            isPending: false,
            robots: [
                {
                    id: 1,
                    name: 'test',
                    email: 'test@gmail.com'
                }
            ],
        }
        expect(reducer.requestRobots(undefined, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [
                {
                    id: 1,
                    name: 'test',
                    email: 'test@gmail.com'
                }
            ],
        })).toEqual(result)
    })

    it('should handle the REQUEST_ROBOTS_FAIL', () => {
        const result = {
            error: 'ERROR NO',
            isPending: false,
            robots: [] ,
        }
        expect(reducer.requestRobots(undefined, {
            type: REQUEST_ROBOTS_FAILED,
            payload: 'ERROR NO',
        })).toEqual(result)
    })
})