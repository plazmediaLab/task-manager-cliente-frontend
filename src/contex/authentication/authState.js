import React, { useReducer } from 'react';
// Reducer
import AuthReducer from './authReducer'
// Context
import AuthContext from './authContext';
// Types
import {
  SINGUP_SUCCESSFULLY,
  SINGUP_ERROR,
  GET_USER,
  LOGIN_SUCCESSFULLY,
  LOGIN_ERROR,
  LOG_OUT
} from '../../types/index';
// Axios
import axiosClient from '../../config/axios'

const AuthState = props => {

  // Initial state
  const initialState = {
    token: localStorage.getItem('token'),
    authentication: null,
    userInfo: null,
    message: null
  }

  const [ state, dispatch ] = useReducer(AuthReducer, initialState);

  // Functions
  const singupUser = async data => {
    try {

      console.log('Dam...');
      const response = await axiosClient.post('/api/users', data);
      console.log(response.data);

      dispatch({
        type: SINGUP_SUCCESSFULLY,
        payload: response.data
      })
      
    } catch (error) {
      console.log(error.response)
      const alert = {
        category: 'msn-error',
        msn: error.response.data.msn,
        icon: 'a-plaz-astronaut'
      }

      dispatch({
        type: SINGUP_ERROR,
        payload: alert
      })
    }
  }

  return(
    <AuthContext.Provider
      value={{
        token: state.token,
        authentication: state.authentication,
        userInfo: state.userInfo,
        message: state.message,
        singupUser
      }}
    >
      {props.children}
    </AuthContext.Provider>  
  )

}

export default AuthState;