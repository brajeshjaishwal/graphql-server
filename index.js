var express = require('express')
var { graphqlserver } = require('./graphQLServer')

var app = new express()

const PORT = process.env.PORT || 4000; 

app.use('/courseapi', graphqlserver)

app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`)
})