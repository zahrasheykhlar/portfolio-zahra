// import React from 'react';
// import Link from 'next/link';
// import Button from '../../components/Button'
// import {Link as NextLink} from '../../routes'

// // import '../../styles/main.scss';
 


// class Header extends React.Component
// {
// 	render()
// 	{
// 		const title = this.props.title;

// 		return(
//         <div>
 
      //       <Link href="/">
	     //    	<a style={{'fontSize':'30px'}}> Home </a>
	    	// </Link>
	    	
// 	    	<Link href="/about">
// 	    	<a> About </a>
// 	    	</Link>

// 	    	<Link href="/portfolios">
// 	        	<a> Portfolio </a>
// 	    	</Link>

// 	    	<Link href="/cv">
// 	           <a> CV </a>
// 	    	</Link>

// 	    	<Link href="/blogs">
// 	           <a> Blog </a>
// 	    	</Link>

// 			<NextLink route='test' params={{id : '2'}} > Test 2</NextLink>
// 			<NextLink route='/test/5'> Test 5</NextLink>
// 		  <style jsx>{'a {font-size: 20px;}; .customClass { color: red;}'}</style>

//          </div>
// 		 )
// 	}

// }

// export default Header;

import React, { useState } from 'react';
import Link from 'next/link';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import auth0 from '../../services/auth0';

const BSNavLink = (props) => {
	const {route, title} = props;
	return(
  			<Link href={route}>
	        	<a className="nav-link port-navbar-link"> {title} </a>
	    	</Link>
		)
}

const Login = () => {
  return(
      <span onClick={auth0.login} className="nav-link port-navbar-link clickable">Login</span>
    )
}
const Logout = () => {
  return(
      <span  onClick={auth0.logout} className="nav-link port-navbar-link clickable">Logout</span>
    )
}

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const {isAuthenticated} = props;
  return (
    <div>
      <Navbar className="port-navbarport-default absolute" color="transparent" light >
        <NavbarBrand className="port-navbar-brand" href="/" className="mr-auto">Zahra Sheykhlar</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="port-navbar-item">
          		<BSNavLink route="/" title="Home" />
            </NavItem>
          	<NavItem className="port-navbar-item">
          		<BSNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
          		<BSNavLink route="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
          		<BSNavLink route="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
          		<BSNavLink route="/cv" title="CV" />
            </NavItem>
            { !isAuthenticated &&
              <NavItem className="port-navbar-item">
               <Login />
              </NavItem>
            }
            { isAuthenticated &&
              <NavItem className="port-navbar-item">
                <Logout /> 
              </NavItem>
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;