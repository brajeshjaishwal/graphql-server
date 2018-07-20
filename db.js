const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    id: Number,
    title: String,
    author: Number,
    description: String,
    topic: String,
    url: String
})

const authorSchema = new Schema({
    id: Number,
    name: String,
    country: String,
    social: String
})

const dbport = 'mongodb://localhost:27017/courses'
mongoose.connect(dbport)
mongoose.connection.once('open', () => {
    console.log(`mongodb is running on ${dbport}`)
})

var coursesData = mongoose.model("courses", courseSchema)
var authorsData = mongoose.model("authors", authorSchema)

module.exports = {
    coursesData,
    authorsData
}
