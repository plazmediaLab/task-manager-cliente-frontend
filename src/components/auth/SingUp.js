import React, {useState, useContext, useRef, useEffect} from 'react';
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
  height: 98vh;
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
    font-size: 1.5em;
  }
  label,
  div.txt-a-c{
    color: var(--text-light);
  }
  p.msn{
    text-align: center;
  }

  @media (max-width: 589px){
    width: 85%;
    padding: 1rem;
  }
`;


const SingUp = (props) => {

  // REFS
  const inputName = useRef(null);
  const inputPass = useRef(null);
  const inputPassRepeat = useRef(null);
  

  // ALERT -> Extract values of context
  const alertContex = useContext(AlertContex);
  // Destructuring
  const { alert, showAlert } = alertContex
  // AUTHENTICATION -> Extract values of context
  const authContex = useContext(AuthContex);
  // Destructuring
  const { message, authentication, singupUser } = authContex;

  // useEffect
  // In case of registration, duplicate or authenticated
  useEffect(() => {
    
    // If there is authentication, redirect control panel
    if(authentication){
      props.history.push('/projects');
    }

    // If there is messages
    if(message){
      showAlert(message.category, message.msn, message.icon)
    }

    // eslint-disable-next-line
  }, [message, authentication, props.history]);

  // STATE
  const [newuser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    passRepeat: ''
  });

  // Destructuring
  const { name, email, password, passRepeat  } = newuser;

  // onChange
  const onChange = (e) => {
    setNewUser({
      ...newuser,
      [e.target.name]: e.target.value
    })
  }

  // SUBMIT
  const onSubmit = e => {
    e.preventDefault();
    
    // Validate fields
    if(
      name.trim()         === ''  ||
      email.trim()        === ''  ||
      password.trim()     === ''  ||
      passRepeat.trim()   === ''
      ){

      showAlert('msn-warning', 'All fields are required');
      inputName.current.focus()
      return;

    }

    // Min 6 characters length
    if(password.length < 6){
      showAlert('msn-info', 'The password must have at least 6 characters', 'a-vpn_key');
      inputPass.current.focus()
      return;
    }

    // Passwords are same
    if(password !== passRepeat){
      showAlert('msn-error', 'The passwords are not equald', 'a-httpslock');
      inputPassRepeat.current.focus()
      return;
    }

    // Sent to action
    singupUser({
      name,
      email,
      password
    });

  }

  return (
    <MainContainer>
      <LoginGrid className="box-shadow-m br-m">

        <h1 className="txt-a-c pb-2">
          Create a new account
        </h1>
        <hr />

        <form
          onSubmit={onSubmit}
        >
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              name="name"
              id="name"
              className="input-100"
              placeholder="Write your name"
              onChange={onChange}
              value={name}
              ref={inputName}
            />
            <div className="icon-input">
              <i className="a-plaz-astronaut"></i>
            </div>
          </div>
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
              ref={inputPass}
            />
            <div className="icon-input">
              <i className="a-vpn_key"></i>
            </div>
          </div>
          <div className="form-item">
            <label htmlFor="passRepeat">Password</label>
            <input 
              type="password"
              name="passRepeat"
              id="passRepeat"
              className="input-100"
              placeholder="Repeat your password"
              onChange={onChange}
              value={passRepeat}
              ref={inputPassRepeat}
            />
            <div className="icon-input">
              <i className="a-httpslock"></i>
            </div>
          </div>
          <div className="form-item vm-4 jc-end">
            <button type="submit" className="btn btn-100 btn-secondary">Login</button>
          </div>
        </form>

        {alert ? <p className={`msn ${alert.category}`}><i className={alert.icon}></i>&nbsp; {alert.msn}</p> : null}

        <hr />
        <div className="txt-a-c">
          <Link to={'/'} className="btn btn-100 btn-empty-cancel">
            <i className="a-arrow_back"></i> Back
          </Link>
        </div>

      </LoginGrid>
    </MainContainer>
  );
};

export default SingUp