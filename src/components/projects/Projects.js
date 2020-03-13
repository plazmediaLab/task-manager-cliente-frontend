import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';
// Componets
import Sidebar from '../layout/Sidebar';
import NavBar from '../layout/NavBar';
import FormTasks from '../tasks/FormTasks';
import TasksList from '../tasks/TasksList';

import AuthContex from '../../contex/authentication/authContext';


const GridMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh!important;
  display: grid;
  /* gap: 1rem; */
  grid-template-columns: 25rem 1fr;
  grid-template-rows: 1fr;
  -webkit-box-sizing: border-box;
    box-sizing: border-box;
`;
const Main = styled.main`
  display: grid;
  overflow: auto;
  grid-template-columns: 1fr;
  grid-template-rows: auto minmax(2rem, auto) 1fr;
  max-height: 100%;
  -webkit-box-sizing: border-box;
    box-sizing: border-box;
`;


const Projects = () => {

  // Extract authentication info
  const authContext = useContext(AuthContex);
  const { authUser } = authContext;

  useEffect(() => {
    authUser();

    // eslint-disable-next-line
  }, [/* dependencia */]);

  return (
    <GridMainContainer>
      <Sidebar />

      <Main>

        <NavBar />

        <FormTasks />


        <TasksList />


      </Main>
    </GridMainContainer>
  );
};

export default Projects