import { SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNIN_FAILURE, SIGNIN_SUCCESS, SET_ERROR, CLEAR_ERROR } from '../actions/authActions';

const initialState = {
  user: null,
  error: null,
  isLoggedIn:false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoggedIn: true
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        error: action.error,
        isLoggedIn: false
      };
    case SIGNIN_SUCCESS:
    return {
        ...state,
        user: action.payload,
        error: null,
        isLoggedIn: true
    };
    case SIGNIN_FAILURE:
    return {
        ...state,
        user: null,
        error: action.error,
        isLoggedIn: false
    };
    case SET_ERROR:
        return { 
        ...state, 
        error: action.payload 
    };
    case CLEAR_ERROR:
        return { 
        ...state, 
        error: null 
        };
    default:
      return state;
  }
};
