import React, { useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// Context
import projectContext from './projectContext';
// Reducer
import projectReducer from './projectReducer';
// Types
import {
  FORM_NEWPROJECT,
  GET_PROJECT,
  ADD_PROJECT,
  VALIDATE_FORM,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT
} from '../../types/';
import axiosClient from '../../config/axios';


const ProjectState = props => {

  const initialState = {
    projects: [],
    newProject: false,
    errorform: false,
    actualproject: null,
    message: null
  }

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Serie de funciones para el CRUD
  const displayFromNewProject = () => {
    dispatch({
      type: FORM_NEWPROJECT
    })
  }

  // GET projects
  const getProjects = async () => {
    try {
      
      const response = await axiosClient.get('/api/projects')
      
      dispatch({
        type: GET_PROJECT,
        payload: response.data.projects
      })

    } catch (error) {

      const alert = {
        category: 'msn-error',
        msn: 'There was a mistake...',
        icon: 'a-security'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })

    }
  }

  // ADD new project
  const addNewProject = async object_param => {
    // object_param.id = uuidv4()

    try {
      
      const response = await axiosClient.post('/api/projects', object_param);
      
      // Incert to State
      dispatch({
        type: ADD_PROJECT,
        payload: response.data
      })

    } catch (error) {

      const alert = {
        category: 'msn-error',
        msn: 'There was a mistake...',
        icon: 'a-security'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })

    }
  };

  // Validate Form
  const showError = () =>{
    dispatch({
      type: VALIDATE_FORM
    })
  }

  // Project active
  const actualProject = (projectId) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: projectId
    })
  };

  // Delete project
  const deleteProject = async (projectId) => {
    try {

      await axiosClient.delete(`/api/projects/${projectId}`);

      dispatch({
        type: DELETE_PROJECT,
        payload: projectId
      });

    } catch (error) {

      const alert = {
        category: 'msn-error',
        msn: 'There was a mistake...',
        icon: 'a-security'
      }

      dispatch({
        type: ERROR_PROJECT,
        payload: alert
      })

    }
  };


  return (
    <projectContext.Provider
      value={{
        projectsList: state.projects,
        newProject: state.newProject,
        errorform: state.errorform,
        actualproject: state.actualproject,
        message: state.message,
        displayFromNewProject,
        getProjects,
        addNewProject,
        showError,
        actualProject,
        deleteProject
      }}
    >
      {props.children}
    </projectContext.Provider>
  )
}

export default ProjectState;