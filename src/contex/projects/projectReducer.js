import {
  FORM_NEWPROJECT,
  GET_PROJECT,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT
} from '../../types/'


export default ( state, action ) => {
  switch(action.type){
    case FORM_NEWPROJECT:
      return{
        ...state,
        newProject: true
      }
      case GET_PROJECT:
        return{
          ...state,
          projects: action.payload
        }
      case ADD_PROJECT:
        return{
          ...state,
          projects: [action.payload, ...state.projects],
          newProject: false,
          errorform: false
        }
      case VALIDATE_FORM:
        return{
          ...state,
          errorform: true
        }
      case ACTUAL_PROJECT:
        return{
          ...state,
          actualproject: state.projects.filter(item => item._id === action.payload)
        }
      case DELETE_PROJECT:
        return{
          ...state,
          projects: state.projects.filter(item => item._id !== action.payload),
          actualproject: null
        }
      case ERROR_PROJECT:
        return{
          ...state,
          message: action.payload
        }


    default:
      return state;
  }
}