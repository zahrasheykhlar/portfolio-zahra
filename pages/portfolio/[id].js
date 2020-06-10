import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import axios from 'axios';

import {withRouter} from 'next/router';

class Portfolio extends React.Component {

  static async getInitialProps(context)
    {
      console.log('getInitialProps');
      let post = {};
      const postId = context.query.id

      try{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`); 
        console.log(response.data);
        post = response.data;
      }
      catch(err)
      {
        console.error(err);
      }
      
       return {post};
    }

  render() {
  const {post} = this.props;
    return(
    	<BaseLayout {...this.props.auth}>
		     <h1>{post.title}</h1>
		     <h2>{post.body}</h2>
         <p>{post.id}</p>
		</BaseLayout>
     )
  }
}

export default withRouter(Portfolio);
