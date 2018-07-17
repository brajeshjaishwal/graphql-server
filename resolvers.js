var { getCourse, getCourses, createCourse, updateCourseTopic } = require('./dummyData.helper')

var getInfo = function() {
    return 'course graphql api'
}

var root = {
    info: getInfo,
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic,
    createCourse: createCourse
};

module.exports.resolvers = root