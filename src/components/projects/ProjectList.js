import React, {useContext, useEffect} from 'react';
import styled from '@emotion/styled';
// Contex
import projectContext from '../../contex/projects/projectContext' 
import AlertContext from '../../contex/alerts/alertContext' 
// Components
import ItemProject from './ItemProject';
import ListProjectsEmpty from './ListProjectsEmpty';


const MainContainer = styled.div`
  width: 100%;
  max-height: 60vh;
  margin-top: 1rem;
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
  // Projects
  const projectsContext = useContext(projectContext)
  // Destructuring
  const { message, projectsList, getProjects } =  projectsContext;
  // Alert
  const alertContex = useContext(AlertContext)
  // Destructuring
  const { alert, showAlert } =  alertContex;

  // UseEffect
  useEffect(() => {

    // If there are an error
    if(message){
      showAlert(message.category, message.msn, message.icon)
    }

    // Get ptojects when load page
    getProjects(projectsList)

    // eslint-disable-next-line
  }, [message]);


  return (
    <MainContainer>

      { alert ? <p className={`msn ${alert.category}`}><i className={`${alert.icon}`}></i>&nbsp; {alert.msn}</p> :   null }

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