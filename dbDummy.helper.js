var { coursesData } = require('./dummyData.js')
var courseId = 4

var getInfo = () => {
    return "GraphQL courses v1 api with dummy data"
}

var getCourse = (args) => { 
    return coursesData.find(c => c.id === args.id)
}

var getCourses = (args) => {
    if (args.topic) {
        return coursesData.filter(course => course.topic === args.topic);
    } else {
        return coursesData;
    }
}

var updateCourseTopic = (args) => {
    var found = coursesData.find(c => c.id === args.id)
    if(found)
        found.topic = topic
    return found
}

var createCourse = (args) => {
    courseId = coursesData.length > 0 ? coursesData[coursesData.length - 1].id + 1 : 1

    var newCourse = {
        id: courseId,
        title: args.title,
        authors: args.authors,
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