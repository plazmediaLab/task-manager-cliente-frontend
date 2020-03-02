import React from 'react';
import styled from '@emotion/styled';


const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  text-align: center;
  padding: 0 2rem 2rem;

  div{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    border: .3rem dashed var(--plaz-light);
    border-radius: .5rem;
    color: var(--plaz-light);
    text-shadow: 0 .1rem .1rem rgba(0,0,0, .5);

    i{
      margin-top: 2rem;
    }
  }
`;


const EmptySelectProject = () => {
  return (
    <ListContainer>
      <div>
        <h1>
          Select one project <br />
          <i className="a-cube af-x3"></i>
        </h1>
      </div>
    </ListContainer>
  );
};

export default EmptySelectProject;