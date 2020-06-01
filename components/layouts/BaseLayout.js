import React from 'react';
import Header from '../shared/Header';

class BaseLayout extends React.Component
{
	render()
	{
  return (
  	<div>
        <Header>
       {this.props.children} 
        </Header>
    </div>
  )
}
}

export default BaseLayout; 