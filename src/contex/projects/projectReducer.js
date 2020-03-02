import {
  FORM_NEWPROJECT,
  GET_PROJECT,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT
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
          projects: [...state.projects, action.payload],
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
          actualproject: state.projects.filter(item => item.id === action.payload)
        }
      case DELETE_PROJECT:
        return{
          ...state,
          projects: state.projects.filter(item => item.id !== action.payload),
          actualproject: null
        }


    default:
      return state;
  }
}