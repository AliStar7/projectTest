import React from 'react';

import { Link } from "react-router-dom";

const Posts = props => (
  <div className="container">
    <div className="row">
    { props.posts.map((post) => {
      return (
        <div key={post.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
          <div className="posts__box">
            <img 
              className="post__box-img" 
              src={post.image_url} 
              alt={post.slug}/>
              <div className="post__text">
                <h5 className="posts__title">
                
                </h5>
                <p className="posts__subtitle">Name: <span>
                  { post.slug }
                </span></p>
                <p className="posts__date">Date: <span>
                  { post.date }
                </span></p>
                <p className="posts__content">Content: <span>
                  { post.excerpt.rendered.slice(3,25) }
                </span></p>
              </div>
              <button className="post_buttons">
                <Link to={{ 
                  pathname: `/posts/${post.id}`,
                  state: { post: post.title }
                  
                }}>Open</Link>
              </button>
          </div>
        </div>
      );
    })}
    </div>
  </div>
);

export default Posts;