import React, {useState} from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';


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

  @media (max-width: 589px){
    width: 85%;
    padding: 1rem;
  }
`;


const SingUp = () => {
  // STATE
  const [newuser, setNewUser] = useState({
    name: '',
    email: '',
    pass: '',
    passRepeat: ''
  });

  // Destructuring
  const { name, email, pass, passRepeat  } = newuser;

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

    // Min 6 characters length

    // Passwords are same

    // Sent to action
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
              name="pass"
              id="pass"
              className="input-100"
              placeholder="Write your password"
              onChange={onChange}
              value={pass}
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
            />
            <div className="icon-input">
              <i className="a-httpslock"></i>
            </div>
          </div>
          <div className="form-item vm-4 jc-end">
            <button type="submit" className="btn btn-100 btn-secondary">Login</button>
          </div>
        </form>

        <hr />
        <div className="txt-a-c">
          <Link to={'/'} className="btn btn-interactive btn-empty-cancel">
            <i className="a-arrow_back"></i> Back
          </Link>
        </div>

      </LoginGrid>
    </MainContainer>
  );
};

export default SingUp