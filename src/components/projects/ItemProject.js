import React, { Fragment, useContext } from 'react';
import styled from '@emotion/styled';
// Contex
import projectContext from '../../contex/projects/projectContext' 


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

  // CONTEX
  const projectsContext = useContext(projectContext)
  // Destructuring
  const {actualProject} =  projectsContext;

  return (
    <Fragment>
      {projectsList.map(item => (
        <li key={item.id}>
          <BtnLi
            type="button"
            onClick={() => actualProject(item.id)}
          ><i className="a-cube"></i>&nbsp; {item.name}</BtnLi>
        </li>
      ))}
    </Fragment>
  );
};

export default ItemProject