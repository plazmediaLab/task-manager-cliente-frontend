import React, { Fragment, useContext } from 'react';
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
  }

  button:not(:last-of-type){
    margin-right: .5rem!important;
  }
`;


const ItemTask = ({ item }) => {

  // CONTEX
  const projectsContext = useContext(projectContext);
  const {actualproject} =  projectsContext;
    // Destructuring
    const [actualProjectInf] = actualproject
  // CONTEX tasks
  const taskContext = useContext(tasksContext)
  const {deleteTask, getTasks, updateStateTask} =  taskContext;

  // onClick delete
  const onClickDelete = (id_arg) => {
    deleteTask(id_arg);
    getTasks(actualProjectInf.id)
  };

  // onClick update task
  const onClickUpdateState = (task_arg) => {
    if(task_arg.state){
      task_arg.state = false
    }else{
      task_arg.state = true;
    }
    updateStateTask(task_arg)
  };

  return (
    <Fragment>
      <FlexLI key={item.projectID} className="list-item i-line">
        <p className="txt-a-l">{item.nameTask}</p>

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
        >
          <i className="a-createmode_editedit"></i>
        </button>
        <button 
          type="button"
          className="btn btn-s-c btn-cancel"
          title="Delete"
          onClick={() => onClickDelete(item.id)}
        >
          <i className="a-trash"></i>
        </button>

      </FlexLI>
    </Fragment>
  );
};

export default ItemTask;