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

function App() {

  console.log(process.env.REACT_APP_BACKEND_URL);

  return (
    <ProjectState>
      <TasksState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/sing-up" component={SingUp}/>
                <Route exact path="/projects" component={Projects}/>
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TasksState>
    </ProjectState>
  );
}

export default App;
