
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEANACTUAL_TASK,
} from '../../types/index';


export default (state, action) => {
  switch(action.type){
    case TASKS_PROJECT:
      return{
        ...state,
        tasksproject: action.payload
      }
      case ADD_TASK:
        return{
          ...state,
          tasksproject: [action.payload, ...state.tasksproject],
          errorTask: false,
          actualTask: null
        }
      case VALIDATE_TASK:
        return{
          ...state,
          errorTask: true
        }
      case DELETE_TASK:
        return{
          ...state,
          tasksproject: state.tasksproject.filter(
            item => item._id !== action.payload 
          )
        }
      case UPDATE_TASK:
        return{
          ...state,
          tasksproject: state.tasksproject.map(
            item => item._id === action.payload._id
            ? action.payload
            : item
          ),
        }
      case ACTUAL_TASK:
        return{
          ...state,
          actualTask: action.payload
        }
      case CLEANACTUAL_TASK:
        return{
          ...state,
          actualTask: null
        }


    default:
      return state;
  } 
}