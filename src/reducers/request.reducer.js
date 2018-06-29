import {
    REQUEST_ROBOTS,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../actions/constants';

const initialState = {
    error: null,
    isPending: false,
    robots: [],
}

export const requestRobots = (state=initialState, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS:
            return {
                ...state,
                isPending: true,
            }

        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                isPending: false,
                robots: action.payload,
            }

        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                isPending: false,
                error: action.payload
            }

        default:
            return state
    }
}