import {
    CHANGE_QUERY,
} from '../actions/constants';

const initialState = {
    query: '',
}

export const searchRobots = (
    state = initialState,
    action = {}
) => {
    switch (action.type) {
        case CHANGE_QUERY: {
            return {
                ...state,
                query: action.payload
            }
        }

        default:
            return state
    }
}
