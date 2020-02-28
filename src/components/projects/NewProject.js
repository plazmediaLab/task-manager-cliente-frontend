import React, { Fragment, useState } from 'react';


const NewProject = () => {

  // STATE
  const [nameproject, setNameProject] = useState({
    nameTask: ''
  });

  // Destructuring
  const { nameTask } = nameproject;

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

    // Set to state

    // Reset form
  }

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-100 btn-secondary"
      >Add new project</button>

      <form
        onSubmit={onSubmitProjectName}
      >
        <div className="form-item">
          <input
            type="text"
            name="nameTask"
            placeholder="Write the project name"
            className="input-100"
            onChange={onChangeNewProject}
            value={nameTask}
          />
        </div>
        <button
          type="submit"
          className="btn btn-100 btn-empty-blue"
        ><i className="a-check1"></i> Add</button>
      </form>
    </Fragment>
  );
};

export default NewProject