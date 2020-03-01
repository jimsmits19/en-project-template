//TODO: Integration tests.
//https://glebbahmutov.com/blog/how-to-correctly-unit-test-express-server/

const express = require('express')
const HelloWorld = require('./src/HelloWorld');
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(new HelloWorld().SayHi()))

app.listen(port, () => console.log(`Example app listening on port ${ port }!`))