const { 
        buildSchema, 
        GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLList,
        GraphQLSchema
    } = require('graphql')

const helper = require('./dbServer.helper')

const courseType = new GraphQLObjectType({
    name: "Course",
    fields: () => ({
        id: { type: GraphQLInt },
        title: { type: GraphQLString },
        authors: { 
            type: authorType,
            resolve: (parentValue, args) => helper.getAuthor(parentValue.id)
        },
        description: { type: GraphQLString },
        topic: { type: GraphQLString },
        url: { type: GraphQLString }
    })
})

const authorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        country: { type: GraphQLString },
        social: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        info: {
            type: GraphQLString,
            resolve: helper.getInfo
        },
        course: {
            type: courseType,
            args: { 
                id: { 
                    type: GraphQLInt 
                }
            },
            resolve: (parentValue, args) => helper.getCourse(args.id)
        },
        courses: {
            type: new GraphQLList(courseType),
            args: {
                topic: {
                    type: GraphQLString
                }
            },
            resolve: (parentValue, args) => helper.getCourses(args.topic)
        }
    }
})

module.exports.schema = new GraphQLSchema( {
    query: RootQuery
})