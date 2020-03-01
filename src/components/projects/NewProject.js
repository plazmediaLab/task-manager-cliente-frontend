import React, { Fragment, useState, useContext } from 'react';
// Import Contex
import projectContex from '../../contex/projects/projectContext';


const NewProject = () => {

  // CONTEX
  const projectsContext = useContext(projectContex)
  const {newProject, displayFromNewProject, addNewProject} =  projectsContext;

  // STATE
  const [nameproject, setNameProject] = useState({
    name: '',
    id: ''
  });

  // Destructuring
  const { name } = nameproject;

  // onChange input
  const onChangeNewProject = (e) => {
    setNameProject({
      ...nameproject,
      [e.target.name]: e.target.value
    })
  }

  // SUBMIT
  const onSubmitProjectName = (e) => {
    e.preventDefault();
    
    // Validate field
    if(name === ''){
      return
    }

    // Set to state
    addNewProject(nameproject)

    // Reset form
    setNameProject({
      name: ''
    })
  }

  // Actions component
  const onClickOnNewProject = () => {
    displayFromNewProject(true)
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-100 btn-secondary"
        onClick= {onClickOnNewProject}
      >Add new project</button>

      {newProject 
        ?(
        <form
          onSubmit={onSubmitProjectName}
        >
          <div className="form-item">
            <input
              type="text"
              name="name"
              placeholder="Write the project name"
              className="input-100"
              onChange={onChangeNewProject}
              value={name}
            />
          </div>
          <button
            type="submit"
            className="btn btn-100 btn-empty-blue"
          ><i className="a-check1"></i> Add</button>
        </form>
        )
        :(
          null
        )
      }

    </Fragment>
  );
};

export default NewProject