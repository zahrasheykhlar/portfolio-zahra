const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000/';

//MIDDLEWARE
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://dev-77j5uxtc.auth0.com/.well-known/jwks.json/'
  }),
  audience: 't5psAEctDvTi2NJCh86Jzzq0t6qIDWmd',
  issuer: 'https://dev-77j5uxtc.auth0.com/',
  algorithms: ['RS256']
})

exports.checkRole = role => (req, res, next) =>{
		const user = req.user;
		if(user && user[namespace + 'role'] === role){
			next();
		}
		else{
			return res.status(401).send({title: 'Not Authorized', detail:'you are not authorized to access this data'})
		}	
	}