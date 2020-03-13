import React, { useContext, useEffect } from 'react';
import styled from '@emotion/styled';

import AuthContex from '../../contex/authentication/authContext';


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

  button{
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

  // Extract authentication info
  const authContext = useContext(AuthContex);
  const { userInfo, authUser, logOUT } = authContext;

  useEffect(() => {
    authUser();

    // eslint-disable-next-line
  }, [/* dependencia */]);

  let colorIcon = userInfo ? 'txt-secondary' : null ;

  return (
    <Container>

      <p><i className={`a-plaz-astronaut ${colorIcon}`}></i>&nbsp; { userInfo ? userInfo.name : null } </p>
      
      { userInfo 
        ?

          <button
            className="btn btn-s-c btn-empty-orange"
            onClick={() => logOUT()}
          >
            Log out &nbsp;<i className="a-sign-out"></i>
          </button>

        : null }

    </Container>
  );
};

export default NavBar