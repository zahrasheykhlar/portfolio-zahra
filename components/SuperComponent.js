import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';

class SuperComponent extends React.Component {
  constructor()
  {
  	supper();
  	this.someVariable = 'just some variable';
  }
  alertName(title)
  {
	alert(title);
  }
  render() {
    return (
    	<BaseLayout>
		     <h1>I am SuperComponent Component</h1>
	  	</BaseLayout>
     )
  }
}

export default SuperComponent;
