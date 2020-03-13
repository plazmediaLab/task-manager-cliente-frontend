import React, {useContext, useState, useEffect, useRef} from "react";
import styled from '@emotion/styled';
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
  const {
    errorTask,
    actualtask,
    addTask,
    validateTask,
    getTasks,
    updateEditTask,
    cleanActualTask
  } =  taskContext;

  // useRef
  let inputName = useRef(null)

  // useEffect
  useEffect(() => {
    if(actualtask){
      setTask(actualtask)
      inputName.current.focus();
    }else{
      setTask({
        nameTask: ''
      })
    }
  }, [actualtask]);

  // STATE
  const [task, setTask] = useState({
    nameTask: '',
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

    // If Edit or New task
    if(!actualtask){

      // ADD the new task
      task.project = projectActive._id
      addTask(task)

    }else{
      // Update task edit
      task.state = false;
      updateEditTask(task);

      // Clean actual task 
      cleanActualTask()
    }

    // Pass teh validation


    // GET tasks
    getTasks(projectActive._id)

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
              ref={inputName}
            />
          </div>
          <div className="col-3">
            <button
              type="submit"
              className={actualtask ? 'btn btn-100 btn-blue box-shadow-s' : 'btn btn-100 btn-secondary box-shadow-s'}
            ><i className={actualtask ? 'a-createmode_editedit' : ''}></i>&nbsp;
              {actualtask 
                ? 'Edit task' 
                : 'Add task'
              }
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