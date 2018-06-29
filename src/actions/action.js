import {
    CHANGE_QUERY,
    REQUEST_ROBOTS,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

export const setQuery = (text) => ({
    type: CHANGE_QUERY,
    payload: text,
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(err => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: err }))
}
