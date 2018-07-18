var { resolvers } = require('./resolvers')
var { schema } = require('./schema.graphql')
var gqlServer = require('express-graphql')

var graphqlserver = gqlServer({
    schema: schema,
    rootValue: resolvers,
    pretty: true,
    graphiql: true
})

module.exports.graphqlserver = graphqlserver