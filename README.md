# graphql-server

graph ql server with Node/Express with few queries and mutations

Start server by running node index.js command on command prompt

    Express server is running on port 4000
    
In browser enter http://localhost:4000/courseapi
1.
{
  info
}

we will get the below

{
  "data": {
    "info": "course graphql api"
  }
}

2.
{
  course(id:1) {
    id
    topic
    description
  }
}

we will get the below

{
  "data": {
    "course": {
      "id": 1,
      "topic": "Node.js",
      "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!"
    }
  }
}

3.

query getSingleCourse($courseId:Int!)
{
  course(id:$courseId) {
    id
    title
  }
}

in query variables enter

{
  "courseId": 1
}

we will get the same output from 2 step

4. another way to run the above 3 query

query getSingleCourse($courseId:Int!)
{
  course(id:$courseId) {
    ...courseFragments
  }
}

fragment courseFragments on Course {
  id
  title
}

we will get the same output from 3 step

5. multiple queries with alias

query getSingleCourse($courseId1:Int!, $courseId2:Int!)
{
  course1: course(id:$courseId1) {
    ...courseFragments
  }
  
  course2:course(id:$courseId2) {
    ...courseFragments
  }
}

fragment courseFragments on Course {
  id
  title
  description
}

In query variables
{
  "courseId1": 1,
  "courseId2": 2
}

we will get the below output
{
  "data": {
    "course1": {
      "id": 1,
      "title": "The Complete Node.js Developer Course",
      "description": "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!"
    },
    "course2": {
      "id": 2,
      "title": "Node.js, Express & MongoDB Dev to Deployment",
      "description": "Learn by example building & deploying real-world Node.js applications from absolute scratch"
    }
  }
}

6. Example of mutation

mutation {
  updateCourseTopic(id: 1, topic:"Node.js contents updated with latest tools and tech")
  {
    ...courseFragments
  }
}

fragment courseFragments on Course {
  id
  title
}

we will get the below

{
  "data": {
    "updateCourseTopic": {
      "id": 1,
      "title": "The Complete Node.js Developer Course",
      "topic": "Node.js contents updated with latest tools and tech"
    }
  }
}

means an update has been run
