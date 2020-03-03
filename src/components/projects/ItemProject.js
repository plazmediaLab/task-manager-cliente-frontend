import React, { Fragment, useContext } from 'react';
import styled from '@emotion/styled';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// Contex
import projectContext from '../../contex/projects/projectContext' 
import tasksContext from '../../contex/tasks/tasksContext' 


const BtnLi = styled.button`
  background: transparent;
  border: none;
  width: 100%;
  text-align: left;
  padding-left: 1rem;
  padding-right: .5rem;
  color: var(--plaz-light);
  overflow-x: hidden;

  &:hover{
    background: var(--gray-background-2);
    cursor: pointer;
  }
  &:active{
    background: var(--gray-background-3);
  }
`;


const ItemProject = ({ projectsList }) => {

  // CONTEX projects
  const projectsContext = useContext(projectContext)
  // Destructuring
  const {actualProject} =  projectsContext;
  // CONTEX tasks
  const taskContext = useContext(tasksContext)
  const {getTasks} =  taskContext;

  // Funtion to add the current project
  const selectProject = (id_arg) => {
    actualProject(id_arg); // Set the actual project
    getTasks(id_arg) // Find matches tasks 
  };

  return (
    <Fragment>
      <TransitionGroup>
        {projectsList.map(item => (
          <CSSTransition
            key={item.id}
            timeout={200}
            classNames="task"
          >
            <li>
              <BtnLi
                type="button"
                onClick={() => selectProject(item.id)}
              ><i className="a-cube"></i>&nbsp; {item.name}</BtnLi>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default ItemProject