var { getInfo, getCourse, getCourses, updateCourseTopic, createCourse } = require('./dbServer.helper')

var root = {
    info: getInfo,
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic,
    createCourse: createCourse
};

module.exports.resolvers = root