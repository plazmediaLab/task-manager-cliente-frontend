import React, {useContext, useState} from "react";
import styled from '@emotion/styled';
import { v4 as uuidv4 } from 'uuid';
// Import Contex
import projectContext from '../../contex/projects/projectContext'
import tasksContext from '../../contex/tasks/tasksContext' 


const LogoContainer = styled.div`
  padding: 3rem;
  text-align: center;
  color: var(--plaz-dark);
  font-weight: bold;
`;


const FormTasks = () => {

  // CONTEX projects
  const projectsContext = useContext(projectContext);
  const {actualproject} =  projectsContext;
  // CONTEX tasks
  const taskContext = useContext(tasksContext)
  const {errorTask, addTask, validateTask, getTasks} =  taskContext;

  // STATE
  const [task, setTask] = useState({
    nameTask: '',
    id: ''
  });
  // Destructuring
  const {nameTask} = task; 

  if(!actualproject){
    return (
      <LogoContainer>
        Development by <i className="a-imagotype"></i>
      </LogoContainer>
    )
  }
  // Destructuring first position of actualproject
  const [projectActive] = actualproject;

  // Handle data form
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  };

  // Submit form
  const onSubmit = (e) => {
    e.preventDefault();
    
    // Validate
    if(nameTask.trim() === ''){
      validateTask()
      return;
    }

    // Pass teh validation

    // ADD the new task
    task.projectID = projectActive.id
    task.state = false;
    task.id = uuidv4()
    addTask(task)

    // GET tasks
    getTasks(projectActive.id)

    // Reset form
    setTask({
      nameTask: ''
    })
  
  };

  return (
    <div className="p-4">
      <form
        onSubmit={onSubmit}
      >
        <div className="col-row gap-2">
          <div className="col-9">
            <input
              type="text"
              name="nameTask"
              placeholder="Write the task name"
              className="input-100 box-shadow-s"
              value={nameTask}
              onChange={handleChange}
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              className="btn btn-100 btn-secondary box-shadow-s"
            >
              Add task
            </button>
          </div>
        </div>
      </form>
      {errorTask 
        ? <p className="msn msn-error mt-2"><i className="a-info-warning"></i>&nbsp; The field is required</p>
        : null
      }
    </div>
  );
};

export default FormTasks;