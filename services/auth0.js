import auth0 from 'auth0-js'

class Auth0 {
	constructor(){
		this.auth0 = new auth0.WebAuth({
		domain: 'dev-77j5uxtc.auth0.com',
		clientID: 't5psAEctDvTi2NJCh86Jzzq0t6qIDWmd',
		redirectUrl: 'http://localhost:3000/callback',
		responseType:'token id_token',
		scope: 'openid profile'
		});
		this.login = this.login.bind(this);
	}

	login(){
		this.auth0.authorize();
	}
}

const auth0Client = new Auth0();

export default auth0Client;