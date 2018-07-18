var { coursesData } = require('./db.js')

var getCourse = function(args) { 
    return coursesData.findById({id: args.id})
}

var getCourses = function(args) {
    if (args.topic) {
        return coursesData.filter(course => course.topic === args.topic);
    } else {
        return coursesData;
    }
}

var updateCourseTopic1111 = function({id, topic}) {
    var found = coursesData.find(c => c.id === id)
    if(found)
        found.topic = topic
    return found
}

var createCourse = function({title, author, description, topic, url}) {
    var maxid = coursesData.find().sort('id')
    var newCourse = {
        id: maxid + 1,
        title,
        author,
        description,
        topic,
        url
    }
    coursesData.push(newCourse)
    return newCourse
}

module.exports = {
    getCourse,
    getCourses,
    updateCourseTopic,
    createCourse
}