// import json server package
const jsonserver = require('json-server')

// create json server 
const server = jsonserver.create()

// show our db data n backend then use in server
const router = jsonserver.router("db.json")

// create middleware - using to parse convert the json format to js bcz browser only know js not json formate
const middleware = jsonserver.defaults()

// create port for backend
const PORT = process.env.PORT || 4000

// user all these server
// firstly use middleware
server.use(middleware)
server.use(router)

// to check the server work
server.listen(PORT, () => {
    console.log('Media player server started at port : ' + PORT);
})