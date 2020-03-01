import React from 'react';
import styled from '@emotion/styled';
// Components
import NewProject from '../projects/NewProject';
import ProjectList from '../projects/ProjectList';


const MainContainer = styled.div`
  background-color: var(--White);
  height: 100%;
  padding: 1rem;
  box-shadow: .3rem 0 .5rem -.2rem rgba(0, 0, 0, .2);
  font-family: var(--font-1);
`;


const Sidebar = () => {

  return (
    <aside>
      <MainContainer>
        <h2>
          <i className="a-isotype-code-color"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></i>
          &nbsp;<span className="font-1 txt-strong txt-primary"> TASK</span>
          <small>Manager</small>
        </h2>
        <hr />

        <NewProject />

        <hr />
        <p className="txt-brand-2 af-l">Your list projects</p>

        <ProjectList />

      </MainContainer>
    </aside>
  );
};

export default Sidebar