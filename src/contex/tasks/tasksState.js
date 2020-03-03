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
  STATE_TASK,
  ACTUAL_TASK,
  UPDATE_TASK,
  CLEANACTUAL_TASK,
} from '../../types/index';

const TasksState = props => {
  const initialState = {
    tasksList: [
      {id: 1, nameTask: 'Conectar servidor', state: true, projectID: 1},
      {id: 2, nameTask: 'Crear la API', state: true, projectID: 2},
      {id: 3, nameTask: 'Seleccionar equipo de trabajo', state: false, projectID: 6},
      {id: 4, nameTask: 'Logo', state: true, projectID: 1},
      {id: 5, nameTask: 'Pagar por adelantado', state: false, projectID: 3},
      {id: 6, nameTask: 'Tramitar visas', state: false, projectID: 4},
      {id: 7, nameTask: 'Elegir plataformas de pago', state: true, projectID: 6},
      {id: 8, nameTask: 'Elegir hosting', state: false, projectID: 1},
      {id: 9, nameTask: 'Paleta de colores', state: true, projectID: 2},
      {id: 10, nameTask: 'Selebrar lanzamiento', state: false, projectID: 2},
    ],
    tasksproject: null,
    errorTask: false,
    actualtask: null
  }

  // Create dispatch & state
  const [state, dispatch] = useReducer(TasksReducer, initialState);

  // GET tasks of the projects
  const getTasks = (projectID_arg) => {
    dispatch({
      type: TASKS_PROJECT,
      payload: projectID_arg
    })
  };

  // ADD task to project
  const addTask = (task_arg) => {
    dispatch({
      type: ADD_TASK,
      payload: task_arg
    })
  };

  // Validate in case there is an error
  const validateTask = () => {
    dispatch({
      type: VALIDATE_TASK,
    })
  };

  // Delete task by ID
  const deleteTask = (id_arg) => {
    dispatch({
      type:DELETE_TASK,
      payload: id_arg
    })
  };

  // Update the state of the task
  const updateStateTask = (task_arg) => {
    dispatch({
      type: STATE_TASK,
      payload: task_arg
    })
  };

  // Extract one task to edit
  const actualTask = (task_arg) => {
    dispatch({
      type: ACTUAL_TASK,
      payload: task_arg
    })
  };

  // Update edit task
  const updateEditTask = (task_arg) => {
    dispatch({
      type: UPDATE_TASK,
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
        tasksList: state.tasksList,
        tasksproject: state.tasksproject,
        errorTask: state.errorTask,
        actualtask: state.actualTask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        updateStateTask,
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