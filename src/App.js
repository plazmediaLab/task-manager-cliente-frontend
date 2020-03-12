import React, { } from 'react';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Contex
import ProjectState from './contex/projects/projectState';
import TasksState from './contex/tasks/tasksState';
import AlertState from './contex/alerts/alertState';
import AuthState from './contex/authentication/authState';
// Components
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import Projects from './components/projects/Projects';
import PrivateRoute from './components/routes/PrivateRoute';

// Token
import tokenAuth from './config/tokenAuth';

// Check for a token
const token = localStorage.getItem('token');
if(token){
  tokenAuth(token)
}

function App() {

  return (
    <ProjectState>
      <TasksState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/sing-up" component={SingUp}/>
                <PrivateRoute exact path="/projects" component={Projects}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TasksState>
    </ProjectState>
  );

}

export default App;
