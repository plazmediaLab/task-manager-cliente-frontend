import React, { useReducer } from 'react';
// Reducer
import alertReducer from './alertReducer'
// Context
import alertContext from './alertContext';
// Types
import {
  SHOW_ALERT,
  HIDE_ALERT
} from '../../types/index';

const AlertState = props => {

  // Initial state
  const initialState = {
    alert: null
  }

  const [ state, dispatch ] = useReducer(alertReducer, initialState);

  // Functions
  const showAlert = (category, msn, icon = 'a-info-warning') => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        category,
        msn,
        icon
      }
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT
      })
    }, 5000);
  }
  
  return(
    <alertContext.Provider
      value={{
        alert: state.alert,
        showAlert
      }}
    >
      {props.children}
    </alertContext.Provider>  
  )
}

export default AlertState;