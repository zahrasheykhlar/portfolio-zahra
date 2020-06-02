import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import Link from 'next/link';
import BasePage from '../components/BasePage';

class Portfolios extends React.Component {
static async getInitialProps()
	  {
	  	let posts = [];
	  	try{
	  		const response = await axios.get('https://jsonplaceholder.typicode.com/posts');	
	  		//console.log(response.data);
	  		posts = response.data;
	  	}
	  	catch(err)
	  	{
	  		console.error(err);
	  	}
	  	
	  	 return {posts};
	  }

	renderPosts(posts)
	{
		return  posts.map((post, index) => {
			return (
					<li key={index}>
				    	<Link as={`/portfolio/${post.id}`} href="/portfolio/[id]">
	        				<a style={{'fontSize':'30px'}}> {post.title} </a>
	     				</Link>
					</li>
					)
		})
	}

	render() {
  	const { posts } = this.props;
    return (
    	<BaseLayout>
    	<BasePage>
	    	<h1>I am Portfolios page</h1>
	    	<ul>
	    		{this.renderPosts(posts)}
	    	</ul>
	    </BasePage>
	    </BaseLayout>
    	)
  	}
}


export default Portfolios;
