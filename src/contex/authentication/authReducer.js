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
    case LOGIN_SUCCESSFULLY:
    case SINGUP_SUCCESSFULLY:
      localStorage.setItem('token', action.payload.token)
      return{
        ...state,
        authentication: true,
        message: null,
        loading: false
      }
    case GET_USER:
      return{
        ...state,
        authentication: true,
        userInfo: action.payload,
        loading: false
      }
    case LOGIN_ERROR:
    case SINGUP_ERROR:
    case LOG_OUT:
      localStorage.removeItem('token')
      return{
        ...state,
        token: null,
        userInfo: null,
        authentication: null,
        message: action.payload,
        loading: false
      }


    default:
      return state;
  }
}