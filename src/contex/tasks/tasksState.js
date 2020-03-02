import React, {useReducer} from 'react';
// Context
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';

const TasksState = props => {
  const initialState = {
    tasksList: []
  }

  // Create dispatch & state
  const [state, dispatch] = useReducer(TasksReducer, initialState);

  return (
    <TasksContext.Provider
      value={{
        tasksList: state.tasksList
      }}
    >
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksState;