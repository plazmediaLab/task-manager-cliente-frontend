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
import axiosClient from '../../config/axios';
import tokenAuth from '../../config/tokenAuth';

const AuthState = props => {

  // Initial state
  const initialState = {
    token: localStorage.getItem('token'),
    authentication: null,
    userInfo: null,
    message: null,
    loading: true
  }

  const [ state, dispatch ] = useReducer(AuthReducer, initialState);

  // Functions

  // Sing UP user
  const singupUser = async data => {
    try {

      const response = await axiosClient.post('/api/users', data);

      dispatch({
        type: SINGUP_SUCCESSFULLY,
        payload: response.data
      })

      // Get user
      authUser();
      
    } catch (error) {

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

  // Return the autentication user
  const authUser = async () => {

    const token = localStorage.getItem('token');

    if(token){

      tokenAuth(token);

    }

    try {

      const response = await axiosClient.get('/api/auth');
      // console.log(response);
      dispatch({
        type: GET_USER,
        payload: response.data.user
      })
      
    } catch (error) {

      console.log(error.response)

      dispatch({
        type: LOGIN_ERROR,
      })  

    }

  }

  // When user login
  const loginUser = async (data) => {
    
    try {
      
      const response = await axiosClient.post('/api/auth', data);
      console.log(response)

      dispatch({
        type: LOGIN_SUCCESSFULLY,
        payload: response.data
      })

      // Get user
      authUser();

    } catch (error) {

      console.log(error.response.data.msn);
      const alert = {
        category: 'msn-error',
        msn: error.response.data.msn,
        icon: 'a-ban'
      }

      dispatch({
        type: LOGIN_ERROR,
        payload: alert
      })

    }

  };

  // Log out
  const logOUT = () => {
    dispatch({
      type: LOG_OUT,
    })
  }

  return(
    <AuthContext.Provider
      value={{
        token: state.token,
        authentication: state.authentication,
        userInfo: state.userInfo,
        message: state.message,
        loading: state.loading,
        singupUser,
        loginUser,
        authUser,
        logOUT
      }}
    >
      {props.children}
    </AuthContext.Provider>  
  )

}

export default AuthState;