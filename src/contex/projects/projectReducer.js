import {
  FORM_NEWPROJECT,
  GET_PROJECT,
  ADD_PROJECT
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
          newProject: false
        }


    default:
      return state;
  }
}