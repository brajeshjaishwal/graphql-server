const axios = require('axios')

var courseUrl = "http://localhost:3000/courses"
var authorUrl = "http://localhost:3000/authors"

const getInfo = () => {
    return "Graph QL courses api v3 with json server api"
}

const getCourse = (id) => {
    return axios.get(`${courseUrl}/${id}`).then(
        resp => resp.data
    )
}

const getAuthor = (id) => {
    return axios.get(`${authorUrl}/${id}`).then(
        resp => resp.data
    )
}

const getCourses = (args) => {
    console.log(args)
    if(args.topic)
        return axios.get(`${courseUrl}?${topic_like=args.topic}`).then(resp => resp.data)
    else
        return axios.get(`${courseUrl}`).then(resp => resp.data)
}

const updateCourseTopic = (args) => {

}

const createCourse = ({title, author, description, url, topic}) => {
    return axios.post(`${courseUrl}`, {title, author, description, url, topic})
        .then(resp => resp.data)
}

const deleteCourse = (id) => {
    return axios.delete(`${courseUrl}/${id}`)
        .then(resp => resp.data)
}

const updateCourse = (args) => {
    return axios.patch(`${courseUrl}/${args.id}`, args)
        .then(resp => resp.data)
}

module.exports = {
    getInfo,
    getAuthor,
    getCourse,
    getCourses,
    updateCourseTopic,
    createCourse,
    deleteCourse,
    updateCourse
}