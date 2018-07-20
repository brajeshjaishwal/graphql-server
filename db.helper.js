var { coursesData } = require('./db.js')

var getInfo = () => {
    return "Graph QL courses v2 api with mongodb database"
}
var getCourse = (parentValue, args) => { 
    return coursesData.findById({id: args.id})
}

var getCourses = (parentValue, args) => {
    if (args.topic) {
        return coursesData.filter(course => course.topic === args.topic);
    } else {
        return coursesData;
    }
}

var updateCourseTopic = (parentValue, args) => {
    var found = coursesData.find(c => c.id === args.id)
    if(found)
        found.topic = topic
    return found
}

var createCourse = (parentValue, args) => {
    var maxid = coursesData.find().sort('id')
    var newCourse = {
        id: maxid + 1,
        title: args.title,
        author: args.author,
        description: args.description,
        topic: args.topic,
        url: args.url
    }
    coursesData.push(newCourse)
    return newCourse
}

module.exports = {
    getInfo,
    getCourse,
    getCourses,
    updateCourseTopic,
    createCourse
}