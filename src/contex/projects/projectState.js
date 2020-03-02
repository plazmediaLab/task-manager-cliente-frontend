import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
} from '../../types/'

const ProjectState = props => {

  const projects = [
    {id: 1, name: 'Tienda virtual para la empresa'},
    {id: 2, name: 'Intranet'},
    {id: 3, name: 'Hacer la maleta'},
    {id: 4, name: 'Recoger los papeles'},
    {id: 5, name: 'Diseño de sitios WEB'},
    {id: 6, name: 'Concentrar datos en Contex'}
  ]

  const initialState = {
    projects: [],
    newProject: false,
    errorform: false,
    actualproject: null
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
  const getProjects = () => {
    dispatch({
      type: GET_PROJECT,
      payload: projects
    })
  }

  // ADD new project
  const addNewProject = object_param => {
    object_param.id = uuidv4()

    // Incert to State
    dispatch({
      type: ADD_PROJECT,
      payload: object_param  
    })
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
  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId
    }) 
  };


  return (
    <projectContext.Provider
      value={{
        projectsList: state.projects,
        newProject: state.newProject,
        errorform: state.errorform,
        actualproject: state.actualproject,
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