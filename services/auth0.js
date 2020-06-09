import auth0 from 'auth0-js'

class Auth0 {
	constructor(){
		this.auth0 = new auth0.WebAuth({
		domain: 'dev-77j5uxtc.auth0.com',
		clientID: 't5psAEctDvTi2NJCh86Jzzq0t6qIDWmd',
		redirectUri: 'http://localhost:3000/callback',
		responseType:'token id_token',
		scope: 'openid profile'
		});
		this.login = this.login.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
	}

    handleAuthentication() {
    	
		 	console.log("1");
    	return new Promise((resolve, reject) => {
    		      this.auth0.parseHash((err, authResult) => {
			        if (authResult && authResult.accessToken && authResult.idToken) {
			        	   console.log(authResult);
			          this.setSession(authResult);
			          resolve();
			        } else if (err) {
			          reject(err);
			          console.log(err);
			        }
      });
   
    	})
 
    }

    setSession() {
    	//save Tokens
    }

	login(){
		this.auth0.authorize();
	}
}

const auth0Client = new Auth0();

export default auth0Client;