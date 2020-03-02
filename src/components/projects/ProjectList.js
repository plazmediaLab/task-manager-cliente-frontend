import React, {useContext, useEffect} from 'react';
import styled from '@emotion/styled';
// Contex
import projectContext from '../../contex/projects/projectContext' 
// Components
import ItemProject from './ItemProject';
import ListProjectsEmpty from './ListProjectsEmpty';


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

  // CONTEX
  const projectsContext = useContext(projectContext)
  // Destructuring
  const {projectsList, getProjects} =  projectsContext;

  // UseEffect
  useEffect(() => {
    // Get ptojects when load page
    getProjects(projectsList)
  }, []);


  return (
    <MainContainer>

      {projectsList.length === 0 
        ?
        (
          <ListProjectsEmpty />
        )
        :
        (
          <ul>
            <ItemProject 
              projectsList={projectsList}
            />
          </ul>
        )
      }
      
    </MainContainer>
  );
};

export default ProjectList