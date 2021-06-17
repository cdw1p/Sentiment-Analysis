const express = require('express')
const app = express()

const Routes = require('./routes')
Routes.initialize(app)

const serverPort = process.env.PORT || 8000
app.listen(serverPort, () => console.info(`Web server listening on port ${serverPort}`))