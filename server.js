const ronin = require('ronin-server')
const mocks = require('ronin-mocks')

const server = ronin.server({
  port:3000
})

server.use('/', mocks.server(server.Router(), false, true))
server.start()
