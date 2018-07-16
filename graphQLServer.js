var { resolvers } = require('./resolvers')
var { schema } = require('./schema.graphql')
var express_graphql = require('express-graphql')

var graphqlserver = express_graphql({
    schema: schema,
    rootValue: resolvers,
    pretty: true,
    graphiql: true
})

module.exports.graphqlserver = graphqlserver