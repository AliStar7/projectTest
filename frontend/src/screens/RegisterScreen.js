import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';


export default function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Create account</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <div className = "input-field">
          
          <i className="fas fa-user icon"></i>
          <input className="inputname"
            type="text"
            id="name"
            placeholder="Введите имя"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <div className = "input-field">
          
          <i className="fas fa-envelope icon"></i>
          <input className="inputname"
            type="email"
            id="email"
            placeholder="Введите почту"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          </div>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div className = "input-field">
          
          <i className="fas fa-lock icon"></i>
          <input className="inputname"
            type="password"
            id="password"
            placeholder="Введите пароль"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          </div>
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm password</label>
          <div className = "input-field">
          
          <i className="fas fa-lock icon"></i>
          <input className="inputname"
            type="password"
            id="confirmPassword"
            placeholder="Введите пароль"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          </div>
        </div>
        <div>
          <label />
          
          <button className="primary" type="submit" 
                >
            Register
          </button>
        </div>
        <div>
          <label />
          <div>
            Hanve an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign In</Link>
          </div>
        </div>
      </form>
    
  );
}
