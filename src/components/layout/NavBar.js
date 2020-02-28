import React from 'react';
import styled from '@emotion/styled';


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  justify-content: space-between;
  align-items: center;
  background: var(--plaz-dark);
  padding: 1.2rem 2rem;

  p{
    margin: 0;
    color: var(--plaz-bright);
    font-weight: bold;
    font-size: 1.8rem;

    i{
      color: var(--plaz-bright);
      background: var(--plaz-color);
      line-height: 1;
      padding: .5rem .7rem;
      border-radius: 50%;
    }
  } 

  a{
    color: var(--White);

    i{
      color: var(--orange);

    }

    &:hover i{
      color: var(--White)!important;
    }
  }
`;


const NavBar = () => {
  return (
    <Container>
      <p><i className="a-plaz-astronaut"></i>&nbsp; Evan Alain</p>
      <a href="#!" className="btn btn-s-c btn-empty-orange">Log out &nbsp;<i className="a-sign-out"></i></a>
    </Container>
  );
};

export default NavBar