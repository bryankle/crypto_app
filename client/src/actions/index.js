import axios from 'axios';
import { browserHistory } from 'react-router'
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:3001';

export function signinUser({ email, password }, redirect) {
    // Submit email/password to the server
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                // If request is good
                // Update state to indicate suer is authenticated
                dispatch({ type: AUTH_USER })
                // Save the JWT token - to make followup requests in the backend
                // redirect to the route home
                redirect();
            })
            .catch(() => {
                // If request is bad
                // show an error to the user

            })
    }
}