const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT
    this.usersPath = '/api/users'

    // Middlewares
    this.middlewares()
    // Rutas app
    this.routes()

    // cors options
    this.corsOptions = {
      origin: 'http://localhost:8000',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      optionSuccessStatus: 200
    }
  }

  middlewares () {
    // cors
    this.app.use(cors(this.corsOptions))
    // Lectura y parse Body
    this.app.use(express.json())
    // directorio public
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.use(this.usersPath, require('../routes/users'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`listening on PORT ${this.port}`)
    })
  }
}

module.exports = Server
