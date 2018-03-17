import axios from 'axios';
import { browserHistory } from 'react-router'
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

import { ROOT_URL } from '../constants';
// const ROOT_URL = 'http://localhost:3001';

export function signinUser({ email, password }, redirect) {
    // Submit email/password to the server
    return function (dispatch) {
        axios.post(`${ROOT_URL}/signin`, { email, password })
            .then(response => {
                console.log("User is logged in.")
                // If request is good
                // Update state to indicate suer is authenticated
                dispatch({ type: AUTH_USER })
                // Save the JWT token - to make followup requests in the backend
                localStorage.setItem('token', response.data.token)
                // redirect to the route home
                redirect();
            })
            .catch(() => {
                // If request is bad
                // show an error to the user
                dispatch(authError('Bad Login Info'));
            })
    }
}

export function signupUser({ email, password }, redirect) {
    console.log("Checking if local host");
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        console.log("This is running in development mode");
    }
	return function(dispatch) {
		// Submit username/password to the server
		axios.post(`${ROOT_URL}/signup`, { email, password })
			.then(response => {
				console.log("User has successfully signed up")
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				localStorage.setItem('email', email);
				redirect();
			})
			// If request is bad
			.catch( error => dispatch(authError(error.response.data.error)));
	}
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    
    return { type: UNAUTH_USER }
}