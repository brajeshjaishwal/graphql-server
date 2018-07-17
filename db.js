const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema({
    id: Number,
    title: String,
    author: String,
    description: String,
    topic: String,
    url: String
})

const dbport = 'mongodb://localhost:27017/courses'
mongoose.connect(dbport)
mongoose.connection.once('open', () => {
    console.log(`mongodb is running on ${dbport}`)
})

module.exports = mongoose.model("coursesData", courseSchema)
