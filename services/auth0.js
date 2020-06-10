import auth0 from 'auth0-js'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

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
		this.logout = this.logout.bind(this);
		this.handleAuthentication = this.handleAuthentication.bind(this);
		
	}

    handleAuthentication() {
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

    setSession(authResult) {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    Cookies.set('user', authResult.idTokenPayLoad);
    Cookies.set('jwt', authResult.idToken);
    Cookies.set('expiresAt', expiresAt);
  	}

  	logout(){
	  	Cookies.remove('user');
	    Cookies.remove('jwt');
	    Cookies.remove('expiresAt');

	    this.auth0.logout({
	    returnTo: ''	,
	    clientID: 't5psAEctDvTi2NJCh86Jzzq0t6qIDWmd'
	    })
  	}

	login(){
		this.auth0.authorize();
	}

	vefiryToken(token)
	{
		if(token)
		{
			const decodedToken = jwt.decode(token);
			const expiresAt = decodedToken.exp * 1000;

			return (decodedToken && new Date().getTime() <expiresAt) ? decodedToken : undefined;
		}
		return undefined;
	}

	clientAuth(){
		const token = Cookies.getJSON('jwt');
		const verifyedToken = this.vefiryToken(token);

		return verifiedToken;
	}

	serverAuth(req){
		if(req.headers.cookie){
			const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
			if(!tokenCookie){ return undefined; }

			const token = tokenCookie.split('=')[1];

			const verifiedToken = this.vefiryToken(token);
			return verifiedToken;
		}
		return undefined;
	}
}

const auth0Client = new Auth0();

export default auth0Client;