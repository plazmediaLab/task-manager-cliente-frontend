import React from 'react';
import styled from '@emotion/styled';


const ContainerDiv = styled.div`
  background: none;
  border: .3rem dashed var(--gray-background-3);
  border-radius: .5rem;
  padding: 3rem;
  text-align: center;
  color: var(--gray-background-4);
`;



const ListProjectsEmpty = () => {
  return (
    <ContainerDiv>
      <h4 className="mb-3">Empty list!</h4>
      <i className="a-cubes af-x3"></i>
    </ContainerDiv>
  );
};

export default ListProjectsEmpty;