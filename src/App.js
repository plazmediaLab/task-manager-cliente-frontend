import React, { } from 'react';
// React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Contex
import ProjectState from './contex/projects/projectState';
import TasksState from './contex/tasks/tasksState';
import AlertState from './contex/alerts/alertState';
// Components
import Login from './components/auth/Login';
import SingUp from './components/auth/SingUp';
import Projects from './components/projects/Projects';

function App() {
  return (
    <ProjectState>
      <TasksState>
        <AlertState>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}/>
              <Route exact path="/sing-up" component={SingUp}/>
              <Route exact path="/projects" component={Projects}/>
            </Switch>
          </Router>
        </AlertState>
      </TasksState>
    </ProjectState>
  );
}

export default App;
