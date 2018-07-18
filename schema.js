var { 
        buildSchema, 
        GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLSchema
    } = require('graphql')

const axios = require('axios')

var url = "http://localhost:3000/courses/"

const courseType = new GraphQLObjectType({
    name: "Course",
    fields: {
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        author: { type: GraphQLString },
        description: { type: GraphQLString },
        topic: { type: GraphQLString },
        url: { type: GraphQLString }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        info: {
            type: GraphQLString,
            resolve: () =>{
                return "GraphQl course api v2"
            }
        },
        course: {
            type: courseType,
            args: { 
                id: { 
                    type: GraphQLInt 
                }
            },
            resolve: (parentValue, args) => {
                return axios.get(`${url}${args.id}`).then(
                    resp => resp.data
                )
            }
        }
    }
})
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

module.exports.schema = new GraphQLSchema( {
    query: RootQuery
})
//module.exports.schema = schema