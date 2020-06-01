import React from 'react';
//import Header from '../components/shared/Header';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';
// import Link from 'next/link';
//functional component
//Dumb component
//get data
//return data
// const Index = () => {
//   return <div>Welcome to Next.js!</div>;
// }

// const Index = function(){
// 	return <h1>I am a page from Normal Fuction</h1>
// }

//class component
//More fuctionality
//More stuff
//user lifecycle function
class Index extends SuperComponent {
	  // static getInitialProps()
	  // {
	  //  //  console.log('getInitialProps');
	  	
	  // 	axios.get('https://jsonplaceholder.typicode.com/todos/1')
	  // 	.then((response) => console.log(response.data))
	  // 	.catch(err => console.log(err))
	  // 	 return {initialData : [1,2,3,4]};
	  // }
	static async getInitialProps()
	  {
	  	let userData = {};
	  	try{
	  		const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');	
	  		//console.log(response.data);
	  		userData = response.data;
	  	}
	  	catch(err)
	  	{
	  		console.error(err);
	  	}
	  	
	  	 return {initialData : [1,2,3,4], userData};
	  }

	constructor()
	{
		super();
		this.state = {
			title : 'I am Index page'
		}
		console.log('constructor');
	}

	componentDidMount()
	{
		console.log('componentDidMount');
	}
	componentDidUpdate()
	{
		console.log('componentDidUpdate');
	}

	componentwillUnmount()
	{
		console.log('componentwillUnmount');
	}

	updateTitle()
	{
		// debugger;
		// console.log('updateTitle');
		this.setState({title : 'I am updated Index page'})
	}
    render() {
		 //debugger;
		//const title = this.state.title;
		const {title} = this.state;
		//const initialData = this.props.initialData;
		const {userData , initialData} = this.props;
	    return (
	    	<BaseLayout  title ='test2'>
		    	<h1>I am a page from Class Component</h1>
		    	<h2>{title}</h2>
		    	<h2>{userData.title}</h2>
		    	<button onClick={() => this.updateTitle()}>Change title</button>
	    	</BaseLayout>

	    	)
  }

}
export default Index; 

// <Header title= {'I am a Header component'}>
// <h1>I am Header subtitle</h1>
// </Header>