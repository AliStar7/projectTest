import React, { useEffect, useState, Component } from 'react';

import Posts from '../components/Posts';






class PostScreen extends Component  {
  state = {
    posts: []
  }
  getPost = async (e) => {
    e.preventDefault();
    const api_call = await fetch(`https://sandbox.parakozm.com/wp-json/wp/v2/posts`);
    
    const data = await api_call.json();
    this.setState({ posts: data});
    console.log(this.state.posts);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("posts");
    const posts = JSON.parse(json);
    this.setState({ posts });
  }
  componentDidUpdate = () => {
    const posts = JSON.stringify(this.state.posts);
    localStorage.setItem("posts", posts);
  }
  
  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <h1 className="Post-title">Test</h1>
        </header>
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}
  
export default PostScreen;