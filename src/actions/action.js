import {
    CHANGE_QUERY,
    REQUEST_ROBOTS,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';
import { callApi } from "../api/api";

export const setQuery = (text) => ({
    type: CHANGE_QUERY,
    payload: text,
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS})
    return callApi('https://jsonplaceholder.typicode.com/users')
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }))
}
