import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import Post from './components/Post';


import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import RegisterScreen from './screens/RegisterScreen';

import SigninScreen from './screens/SigninScreen';
const url = 'https://sandbox.parakozm.com/wp-json/wp/v2/posts'
function App() {
 
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  
  return (
    <BrowserRouter>
      <div className="grid-container">
        <nav className="navbar">
        <div className = "navbar-container">
          <div>
          
            <Link className="brand" to="/">
              ICON
            </Link>
          </div>
          <div>
        
          </div>
          <div className="nav-menu">
          {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                <li>
                    <Link to="/post">Posts</Link>
                  </li>
                  
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          
         
           
        
          </div>
          </div>
        </nav>
        
        <main>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/post" component={PostScreen}></Route>
        <Route path = "/posts/:id"component = {Post}></Route>
        </main>
        
      </div>
      
    </BrowserRouter>
  );
}

export default App;
