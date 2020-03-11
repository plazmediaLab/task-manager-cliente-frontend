import {
  SINGUP_SUCCESSFULLY,
  SINGUP_ERROR,
  GET_USER,
  LOGIN_SUCCESSFULLY,
  LOGIN_ERROR,
  LOG_OUT
} from '../../types/index';

export default (state, action) => {
  switch(action.type){
    case SINGUP_SUCCESSFULLY:
      localStorage.setItem('token', action.payload.token)
      return{
        ...state,
        authentication: true,
        message: null
      }
    case SINGUP_ERROR:
      return{
        ...state,
        token: null,
        message: action.payload
      }


    default:
      return state;
  }
}