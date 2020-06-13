const express = require('express')
const next = require('next')
const routes = require('../routes')

//SERVICE
const authServic = require('./services/auth')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
//const handle = app.getRequestHandler()
const handle = routes.getRequestHandler(app)

  const secretData =[
  {
    title: 'SecretData 1',
    description: 'secret description 1'
  },
  {
     title: 'SecretData 2',
     description: 'secret description 2'
  }
  ]
     
app.prepare()
.then(() => {
  const server = express()
    
  server.get('/api/v1/secret', authServic.checkJWT, (req , res) => {
    return res.json(secretData)
  })

  server.get('/api/v1/onlysiteowner', authServic.checkJWT, authServic.checkRole('siteOwner'), (req , res) => {
    return res.json(secretData)
  })

  server.get('/portfolio/:id', (req, res) => {
  	console.log('/portfolio/:id')
  	const actualPage = '/portfolio';
  	const queryParams = {id: req.params.id};
    app.render(req, res, actualPage, queryParams);
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send({title: 'UnAuthorized', detail: 'UnAuthorized Access!'});
    }
  }); 

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})