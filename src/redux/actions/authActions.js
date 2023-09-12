import axios from 'axios';

import config from '../../config/config';

export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const SET_ERROR = 'SET_ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';


export const signup = (userData) => {
  return async dispatch => {
    try {
      const response = await axios.post(`${config.BACKEND_ENDPOINT}/api/v1/auth/signup`, userData);
      console.log(response)
      console.log("response")
      console.log(response.data + "1")
      console.log(response.status + "2")
      if (response.status === 200) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: response.data
        });
        window.location.href = "console";
      } else {
        dispatch({
          type: SIGNUP_FAILURE,
          error: response.data
        });
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: SIGNUP_FAILURE,
        error: error.response.data
      });
    }
  }
};

export const signin = (userData) => {
    return async dispatch => {
      try {
        const response = await axios.post(`${config.BACKEND_ENDPOINT}/api/v1/auth/signin`, userData);
        console.log(response.data)
        console.log(response.status)
  
        if (response.status === 200) {
          dispatch({
            type: SIGNIN_SUCCESS,
            payload: response.data // 假设这包含了basic auth信息
          });
          window.location.href = "console";
        } else {
          dispatch({
            type: SIGNIN_FAILURE,
            error: response.data
          });
        }
      } catch (error) {
        dispatch({
          type: SIGNIN_FAILURE,
          error: error.response.data
        });
      }
    }
};


export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});

export const clearError = () => ({
    type: CLEAR_ERROR,
});