const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT

    // Middlewares
    this.middlewares()
    // Rutas app
    this.routes()
  }

  middlewares () {
    // directorio public
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.get('/api', (req, res) => {
      res.json('hello world')
    })
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`listening on PORT ${this.port}`)
    })
  }
}

module.exports = Server
