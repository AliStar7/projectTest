import React from 'react';

import { Link } from "react-router-dom";

import { render } from 'react-dom';


class Post extends React.Component {
  state = {
    activePost: []
  }
  
  componentDidMount = async () => {
    const title = this.props.location.state.post;
    const req = await fetch(`https://sandbox.parakozm.com/wp-json/wp/v2/posts`);
    const id = this.props.match.params.id;
    const data = await req.json();
    data.map((date) =>{
      this.setState({ activePost: date});
      //  console.log(date);
    })
    
    // console.log(data);
    // console.log(id);
     console.log(this.state.activeRecipe)
  }
  render() {
 
    
    const post = this.state.activePost;
    
    const id = this.props.match.params.id;
     console.log(post.id);
     console.log(id);  
    
     
    
   return (
     <div>
       {/* {post.id.map((p) =>{
          if(id === p)   
          
          I tried to open this page by id 

          */ }
        
         <div>
      <div className="container">

      <div className="active-post">
        
        <img className="active-post__img" src="" alt={post.slug}/>
        <h3 className="active-post__title">{ post.slug }</h3>
        <h4 className="active-post__name">
          Name: <span>{ post.slug }</span>
        </h4>
        
        <button className="active-post__button">
          <Link to="/post">Go back</Link>
        </button>
        </div>


         </div>
         </div>
         )
       {/* })} */}
     </div>
      
    );
   
 
 
  }
  
  
}


export default Post;





{/* <div className="container">
</div> */}

// <div className="active-recipe">
           
// <img className="active-recipe__img" src="" alt={post.slug}/>
// <h3 className="active-recipe__title">{ post.slug }</h3>
// <h4 className="active-recipe__publisher">
//   Publisher: <span>{ post.slug }</span>
// </h4>
// <p className="active-recipe__website">Website: 
//   <span><a href={post.slug}>{post.slug}</a></span>
// </p>
// <button className="active-recipe__button">
//   <Link to="/post">Go Home</Link>
// </button>

// </div>