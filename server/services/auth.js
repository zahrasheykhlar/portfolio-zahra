const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');



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