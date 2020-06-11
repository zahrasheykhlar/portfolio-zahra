import auth0 from 'auth0-js'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import axios from 'axios'

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

	async getJWKS(){
		const res = await  axios.get('https://dev-77j5uxtc.auth0.com/.well-known/jwks.json');
		const jwks = res.data; 
		return jwks;
	}

	async vefiryToken(token)
	{
		if(token)
		{
			const decodedToken = jwt.decode(token, {complete: true});
			if(!decodedToken){return undefined;}
			const jwks = await this.getJWKS();
			const jwk = jwks.keys[0];
			
			//BUILD CERTIFICATE
			let cert = jwk.x5c[0];
			cert = cert.match(/.{1,64}/g).join('\n');
			cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;
	
			if (jwk.kid === decodedToken.header.kid){
				try{
					const verifiedToken = jwt.verify(token, cert)
					const expiresAt = verifiedToken.exp * 1000;
					return (verifiedToken && new Date().getTime() <expiresAt) ? verifiedToken : undefined;
				}
				catch(err)
				{
					return undefined;
				}
			}



		}
		return undefined;
	}

	async clientAuth(){
		const token = Cookies.getJSON('jwt');
		const verifiedToken = this.vefiryToken(token);

		return verifiedToken;
	}

	async serverAuth(req){
		if(req.headers.cookie){
			const tokenCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
			if(!tokenCookie){ return undefined; }

			const token = tokenCookie.split('=')[1];

			const verifiedToken = await this.vefiryToken(token);
			return verifiedToken;
		}
		return undefined;
	}
}

const auth0Client = new Auth0();

export default auth0Client;