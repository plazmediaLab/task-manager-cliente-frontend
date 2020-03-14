import React, {useContext} from 'react';
import styled from '@emotion/styled';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// Import Contex
import projectContext from '../../contex/projects/projectContext'
import tasksContext from '../../contex/tasks/tasksContext'
// Components
import ItemTask from './ItemTask';
import EmptySelectProject from './EmptySelectProject';
import EmptyTasksList from './EmptyTasksList';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 0 2rem 2rem;
  overflow: auto;
  -webkit-box-sizing: border-box;
    box-sizing: border-box;

  div.card{
    height: 100%;
    max-height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    div.card-head{
      color: var(--plaz-bright);
      text-align: center;

      h3{
        overflow: hidden;
        text-align: left;
        padding-right: 2rem;
        line-height: 1.5;
      }
      button{
        background-color: var(--tomato-dark-1)!important;
        border-color: var(--tomato-dark-1)!important;
      }
      button:hover{
        background-color: var(--tomato)!important;
        border-color: var(--tomato)!important;
      }
      button:active{
        background-color: var(--tomato-dark-2)!important;
        border-color: var(--tomato-dark-2)!important;
      }
    }

    div.card-body{
      height: 100%;
      max-height: 100%;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;

      ul.list-group{
        /* height: 100%; */
        max-height: 82%;
        display: block;
        overflow-y: auto;
      }
    }
  }
`;


const TasksList = () => {

  // CONTEX projects
  const projectsContext = useContext(projectContext);
  const {actualproject, deleteProject} =  projectsContext;
  // CONTEX tasks
  const taskContext = useContext(tasksContext);
  const {tasksproject} =  taskContext;

  if(!actualproject){
    return <EmptySelectProject />
  }

  // Destructuring first position of actualproject
  const [projectActive] = actualproject;

  // Delete actual project
  const onClickDelete = () => {
    deleteProject(projectActive._id)
  };

  return (
      <ListContainer>
        <div className="br-s card box-shadow-m">
          <div className="card-head bg-2 jc-spaceB">
            <h3><i className=" a-pied-piper-last-iso af-m"></i> Tasks list: {projectActive.nameProject}</h3>
            <button
              type="button"
              className="btn btn-s btn-secondary"
              onClick={onClickDelete}
            >
              <i className="a-cube"></i>&nbsp; Delete project
            </button>
          </div>
          <div className="card-body">
            <ul className="list-group ab">
              {tasksproject.length === 0
                ? <EmptyTasksList />

                :<TransitionGroup>
                  {tasksproject.map(item => (
                    <CSSTransition
                      timeout={200}
                      classNames="task"
                      key={item._id}
                    >

                      <ItemTask
                        item={item}
                        key={item._id}
                      />

                    </CSSTransition>
                  ))}
                </TransitionGroup>
              }
            </ul>
          </div>
        </div>
      </ListContainer>
  );
};

export default TasksList;