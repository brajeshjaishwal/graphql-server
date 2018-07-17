var { coursesData } = require('./dummyData.js')

var getCourse = function(args) { 
    return coursesData.find(c => c.id === args.id)
}

var getCourses = function(args) {
    if (args.topic) {
        return coursesData.filter(course => course.topic === args.topic);
    } else {
        return coursesData;
    }
}

var updateCourseTopic = function({id, topic}) {
    var found = coursesData.find(c => c.id === id)
    if(found)
        found.topic = topic
    return found
}

var createCourse = function({author, title, topic, url, description}) {
    var newCourse = {
        id: 1,
        title,
        author,
        description,
        topic,
        url
    }
}

module.exports = {
    getCourse,
    getCourses,
    updateCourseTopic,
    createCourse
}