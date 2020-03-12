import React, { useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';
// Contex
import AlertContex from '../../contex/alerts/alertContext';
import AuthContex from '../../contex/authentication/authContext';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
`;
const LoginGrid = styled.div`
  width: 40rem;
  height: auto;
  background-color: var(--White);
  padding: 2.5rem;

  h1{
    font-weight: bold;
    color: var(--plaz-light);
    letter-spacing: .1rem;
  }
  label,
  div.txt-a-c{
    color: var(--text-light);
  }

  @media (max-width: 589px){
    width: 85%;
    padding: 1rem;
  }
`;

const Login = (props) => {

  // ALERT -> Extract values of context
  const alertContex = useContext(AlertContex);
  // Destructuring
  const { alert, showAlert } = alertContex
  // AUTHENTICATION -> Extract values of context
  const authContex = useContext(AuthContex);
  // Destructuring
  const { message, authentication, loginUser } = authContex;

  // useEffect
  // In case that password or the user doesn't exist
  useEffect(() => {
    
    // If there is authentication, redirect control panel
    if(authentication){
      props.history.push('/projects');
    }

    // If there is messages
    if(message){
      showAlert(message.category, message.msn, message.icon)
    }

  }, [message, authentication, props.history]);

  // STATE
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  // Destructuring
  const { email, password } = user;

  // onChange
  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  // SUBMIT
  const onSubmit = e => {
    e.preventDefault();
    
    // Validate fields
    if(email.trim() === '' || password.trim() === ''){
      showAlert('msn-warning', 'All field are required');
      return;
    }

    // Sent to action
    loginUser({ email, password });

  }

  return (
    <MainContainer>
      <LoginGrid className="box-shadow-m br-m">

        <h1 className="txt-a-c pb-2">
          L<i className="a-isotype-filling txt-secondary af-s"></i>gin
        </h1>
        <hr />

        <form
          onSubmit={onSubmit}
        >
          <div className="form-item">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email"
              name="email"
              id="email"
              className="input-100"
              placeholder="Write your e-mail"
              onChange={onChange}
              value={email}
            />
            <div className="icon-input">
              <i className="a-emoji_food_beverage"></i>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="pass">Password</label>
            <input 
              type="password"
              name="password"
              id="password"
              className="input-100"
              placeholder="Write your password"
              onChange={onChange}
              value={password}
            />
            <div className="icon-input">
              <i className="a-fingerprint"></i>
            </div>
          </div>
          <div className="form-item vm-4 jc-end">
            <button type="submit" className="btn btn-100 btn-secondary">Login</button>
          </div>
        </form>

        {alert ? <p className={`msn ${alert.category} mb-3`}><i className={alert.icon}></i>&nbsp; {alert.msn}</p> : null}

        <div className="txt-a-c">
          <p className="txt-brand">You do not have an account?</p>
          <Link to={'/sing-up'} className="btn btn-interactive btn-empty-blue">
            Sing UP
          </Link>
        </div>

        <hr />
        <div className="txt-a-c">
          <small>Task manager developed to keep a more friendly control of your pending tasks, created by <i className="a-imagotype"></i></small>
        </div>

      </LoginGrid>
    </MainContainer>
  );
};

export default Login