import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';

import {withRouter} from 'next/router';

class Test extends React.Component {

  static async getInitialProps({query})
    {  
      const testId = query.id;
       return {testId};
    }

  render() {
    const {testId} = this.props;
    return(
    	<BaseLayout>
		     <h1>I am test page with Id of {testId}</h1>
		</BaseLayout>
     )
  }
}

export default withRouter(Test);
