import React, { useEffect, useState, Component } from 'react';

import axios from 'axios'
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';

const url = 'https://sandbox.parakozm.com/wp-json/wp/v2/posts'
function HomeScreen()  {
const [posts, setPost] = useState([]);
console.log("Posts:", posts);
const getPosts = async() => {
  const response = await axios
  .get('https://sandbox.parakozm.com/wp-json/wp/v2/posts ')
  .catch((err) => console.log("error", err));
  console.log("response" , response);

  if(response && response.data) setPost(response.data);
};

useEffect(() => {
  getPosts()
}, []);

const postList = posts.length ? (
  posts.map(post=>{
    return (
      <div className ="post card" key={post.id}>
        <div className="card-content">
          <span className="card-title">{post.author}</span>
        </div>
      </div>
    )
  })
) :(
  <div className="center"> Loading... </div>  
)


  return (
    <div className= "hero-container">
         
            <h1>Test <br/>   Project</h1>
            
            <p>Alikhan Ilyassov</p>
            <div className = "hero-btns">
              
            </div>
        </div>
  );
}

  
export default HomeScreen;