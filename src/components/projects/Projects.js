import React from 'react';
import styled from '@emotion/styled';
// Componets
import Sidebar from '../layout/Sidebar';
import NavBar from '../layout/NavBar';
import FormTasks from '../tasks/FormTasks';


const GridMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: grid;
  /* gap: 1rem; */
  grid-template-columns: 25rem 1fr;
  grid-template-rows: 1fr;
`;


const Projects = () => {
  return (
    <GridMainContainer>
      <Sidebar />

      <main>

        <NavBar />

        <FormTasks />

      </main>
    </GridMainContainer>
  );
};

export default Projects