import React, { useContext } from 'react';
import styled from '@emotion/styled';
// Context
import projectContext from '../../contex/projects/projectContext'
import tasksContext from '../../contex/tasks/tasksContext' 


const FlexLI = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p{
    flex: 1 1 0;
    padding-right: 1rem;
    overflow: hidden;
    margin-right: 1.5rem;
  }

  button{
    margin-left: .5rem!important;
  }
  button:first-of-type{
    margin-left: 1.5rem!important;
  }
`;


const ItemTask = ({ item }) => {

  // CONTEX
  const projectsContext = useContext(projectContext);
  const {actualproject} =  projectsContext;
  
  // Destructuring
  // Complete tasks list
  const [actualProjectInf] = actualproject

  // CONTEX tasks
  const taskContext = useContext(tasksContext)
  const {deleteTask, getTasks,  updateEditTask, actualTask} =  taskContext;

  // onClick delete
  const onClickDelete = (id_arg) => {
    deleteTask(id_arg, actualProjectInf._id);
    getTasks(actualProjectInf._id)
  };

  // onClick update task
  const onClickUpdateState = (task_arg) => {
    if(task_arg.state){
      task_arg.state = false
    }else{
      task_arg.state = true;
    }
    updateEditTask(task_arg)
  };

  // Extract task to set in actualTask to edit
  const handleActualTask = (task_arg) => {
    actualTask(task_arg)
  };

  return (
    <FlexLI key={item._id} className="list-item i-line">
      <p className="txt-a-l" title={item.nameTask}>{item.nameTask}</p>

      {item.state
      ? (
        <button 
          type="button"
          className="btn btn-s-c btn-l-acept"
          title="Complete"
          onClick={() => onClickUpdateState(item)}
        >Comp</button>
      )
      :(
        <button 
          type="button"
          className="btn btn-s-c btn-warning"
          title="Incomplete"
          onClick={() => onClickUpdateState(item)}
        >Incom</button>
      )}

      <button 
        type="button"
        className="btn btn-s-c btn-blue"
        title="Edit"
        onClick={() => {handleActualTask(item)}}
      >
        <i className="a-createmode_editedit"></i>
      </button>
      <button 
        type="button"
        className="btn btn-s-c btn-cancel"
        title="Delete"
        onClick={() => onClickDelete(item._id)}
      >
        <i className="a-trash"></i>
      </button>

    </FlexLI>
  );
};

export default ItemTask;