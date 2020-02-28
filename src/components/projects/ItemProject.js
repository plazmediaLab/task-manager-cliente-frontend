import React, { Fragment } from 'react';
import styled from '@emotion/styled';


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


const ItemProject = ({ projects }) => {
  return (
    <Fragment>
      {projects.map(item => (
        <li>
          <BtnLi
            type="button"
          ><i className="a-cube"></i>&nbsp; {item.name}</BtnLi>
        </li>
      ))}
    </Fragment>
  );
};

export default ItemProject