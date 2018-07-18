var { buildSchema } = require('graphql')

// GraphQL schema
var schema = buildSchema(`
    type Query {
        info: String!
        course(id: Int!): Course
        courses(topic: String): [Course]
    },

    type Mutation {
        updateCourseTopic(id: Int!, topic: String!): Course!
        createCourse(title: String!, author: String!, description: String!, topic: String!, url: String!): Course!
    }

    type Course {
        id: Int
        title: String
        author: String
        description: String
        topic: String
        url: String
    }
`);

module.exports.schema = schema