
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  STATE_TASK,
} from '../../types/index';


export default (state, action) => {
  switch(action.type){
    case TASKS_PROJECT:
      return{
        ...state,
        tasksproject: state.tasksList.filter(
          item => item.projectID === action.payload
        )
      }
      case ADD_TASK:
        return{
          ...state,
          tasksList: [action.payload, ...state.tasksList],
          errorTask: false
        }
      case VALIDATE_TASK:
        return{
          ...state,
          errorTask: true
        }
      case DELETE_TASK:
        return{
          ...state,
          tasksList: state.tasksList.filter(
            item => item.id !== action.payload 
          )
        }
      case STATE_TASK:
        return{
          ...state,
          tasksproject: state.tasksproject.map(
            item => item.id === action.payload.id
            ? action.payload
            : item
          )
        }


    default:
      return state;
  } 
}