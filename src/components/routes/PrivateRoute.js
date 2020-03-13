import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../contex/authentication/authContext';


const PrivateRoute = ({ component: Component, ...props }) => {

  const authContex = useContext(AuthContext);
  const { authentication, loading, authUser } = authContex;

  useEffect(() => {
    authUser()

    // eslint-disable-next-line
  }, []);

  return (
    <Route {...props} render={ props => !authentication && !loading ? (
      <Redirect to='/' />
    ) : (
      <Component {...props} />
    ) } 
    />
  );
};

export default PrivateRoute;