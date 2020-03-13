import React, {useReducer} from 'react';
// Context
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';
// Types
import {
  TASKS_PROJECT,
  ADD_TASK,
  VALIDATE_TASK,
  DELETE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEANACTUAL_TASK,
} from '../../types/index';
// Axios
import axiosClient from '../../config/axios';

const TasksState = props => {
  const initialState = {
    tasksproject: [],
    errorTask: false,
    actualtask: null
  }

  // Create dispatch & state
  const [state, dispatch] = useReducer(TasksReducer, initialState);

  // GET tasks of the projects
  const getTasks = async (project) => {

    try {

      const response = await axiosClient.get('/api/tasks', { params: { project } });
      
      dispatch({
        type: TASKS_PROJECT,
        payload: response.data.tasks
      })

    } catch (error) {

      console.log(error);

    }

  };

  // ADD task to project
  const addTask = async (task_arg) => {
    
    try {

      await axiosClient.post('/api/tasks', task_arg);
      
      dispatch({
        type: ADD_TASK,
        payload: task_arg
      })

    } catch (error) {

      console.log(error);

    }

  };

  // Validate in case there is an error
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    })
  };

  // Delete task by ID
  const deleteTask = async (id_arg, project) => {
    
    try {
      
      await axiosClient.delete(`/api/tasks/${id_arg}`, { params: { project }})

      dispatch({
        type:DELETE_TASK,
        payload: id_arg
      })

    } catch (error) {
      
      console.log(error);

    }

  };

  // Update the state of the task
  const updateEditTask = async (task_arg) => {

    try {

      const response = await axiosClient.put(`/api/tasks/${task_arg._id}`, task_arg)

      dispatch({
        type: UPDATE_TASK,
        payload: response.data.task
      })
      
    } catch (error) {

      console.log(error);

    }

  }; 

  // Extract one task to edit
  const actualTask = (task_arg) => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task_arg
    })
  };

  // Clean the actual task selected
  const cleanActualTask = () => {
    dispatch({
      type: CLEANACTUAL_TASK,
    })
  };

  return (
    <TasksContext.Provider
      value={{
        // tasksList: state.tasksList,
        tasksproject: state.tasksproject,
        errorTask: state.errorTask,
        actualtask: state.actualTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        actualTask,
        updateEditTask,
        cleanActualTask
      }}
    >
      {props.children}
    </TasksContext.Provider>
  )
}

export default TasksState;