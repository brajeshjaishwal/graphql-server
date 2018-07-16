var { coursesData } = require('./dummyData.js')

var getInfo = function() {
    return 'course graphql api'
}
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

var root = {
    info: getInfo,
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic
};

module.exports.resolvers = root