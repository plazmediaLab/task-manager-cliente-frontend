import React from 'react';
import styled from '@emotion/styled';
// Components
import ItemProject from './ItemProject';


const MainContainer = styled.div`
  width: 100%;
  /* min-height: 10rem; */
  max-height: 60vh;
  margin-top: 1rem;
  /* background: red; */
  overflow-y: auto;

  ul{
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;

    i{
      color: var(--plaz-bright)
    }
  }
`;


const ProjectList = () => {

  // Data Test 
  const projects = [
    {name: 'Tienda virtual para la empresa'},
    {name: 'Intranet'},
    {name: 'Hacer la maleta'},
    {name: 'Recoger los papeles'},
    {name: 'Diseño de sitios WEB'}
  ]

  return (
    <MainContainer>
      <ul>
        <ItemProject 
          projects={projects}
        />
      </ul>
    </MainContainer>
  );
};

export default ProjectList