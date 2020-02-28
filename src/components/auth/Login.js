import React, {useState} from 'react';
import styled from '@emotion/styled';
import {Link} from 'react-router-dom';


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

const Login = () => {

  // STATE
  const [user, setUser] = useState({
    email: '',
    pass: ''
  });

  // Destructuring
  const { email, pass } = user;

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

    // Sent to action
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
              name="pass"
              id="pass"
              className="input-100"
              placeholder="Write your password"
              onChange={onChange}
              value={pass}
            />
            <div className="icon-input">
              <i className="a-fingerprint"></i>
            </div>
          </div>
          <div className="form-item vm-4 jc-end">
            <button type="submit" className="btn btn-100 btn-secondary">Login</button>
          </div>
        </form>

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