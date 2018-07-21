const { 
        buildSchema, 
        GraphQLObjectType,
        GraphQLString,
        GraphQLInt,
        GraphQLList,
        GraphQLSchema,
        GraphQLNonNull
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
    name: 'RootQuery',
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

const Mutation = new GraphQLObjectType({
    name: "mutation",
    fields: () => ({
        createCourse: {
            type: courseType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                topic: { type: new GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLString },
                author: { type: new GraphQLNonNull(GraphQLString) },
                url: { type: GraphQLString },

            },
            resolve: (parentValue, args) => helper.createCourse(args)
        },
        deleteUser: {
            type: courseType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve: (parentValue, args) => helper.deleteCourse(args.id)
        },
        updateCourse: {
            type: courseType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) },
                topic: { type: GraphQLString },
                title: { type: GraphQLString },
                url: { type: GraphQLString },
                description: { type: GraphQLString },
                author: { type: GraphQLString }
            },
            resolve: (parentValue, args) => helper.updateCourse(args)
        }
    })
})
module.exports.schema = new GraphQLSchema( {
    query: RootQuery,
    mutation: Mutation
})