const Categories = require("../models/categories.models");
const Courses = require("../models/courses.models");
const initModels = require("../models/initModels");
const UserCourses = require("../models/userCourses.models");
const Users = require("../models/users.models");
const Videos = require("../models/videos.models");
const db = require('../utils/database');
const {forEach} = require('p-iteration')

initModels();

const users = [
    {
        firstName: "Candelaria",
        lastName: "Cabrera",
        email: "cande@gmail.com",
        password: "Candeeee"
    },
    {
        firstName: "Valentina",
        lastName: "Cabrera",
        email: "vale@gmail.com",
        password: "Valeee"
    },
    {
        firstName: "Armand",
        lastName: "Fernandez",
        email: "armand@gmail.com",
        password: "Armandddd"
    },
];

const categories = [
    {name: "Frontend"},
    {name: "Backend"},
    {name: "Styles"},
    {name: "Database"}
];

const courses = [
    {
        title: "Node js",
        description: "Aprender backend",
        instructor: "Armand",
        categoryId: 2,
    },
    {
        title: "React js",
        description: "Aprender frontend",
        instructor: "Juan",
        categoryId: 1,
    },
    {
        title: "SQL",
        description: "Aprender database",
        instructor: "Maria",
        categoryId: 4,
    },
    {
        title: "Bootstrap",
        description: "Aprender estilos",
        instructor: "Ramiro",
        categoryId: 3,
    }
];

const videos = [
    {
    title: "Como crear un tabla ",
    url: "www.sql.com",
    courseId: 3,
    },
    {
    title: "Que es npm",
    url: "www.node.com",
    courseId: 1,
    },
    {
    title: "Que es un componente",
    url: "www.react.com",
    courseId: 2,
    },
    {
    title: "Como crear un custome hook",
    url: "www.react.com",
    courseId: 2,
    },
    {
    title: "Bootstrap",
    url: "www.bootstrap.com",
    courseId: 4,
    },
];

const userCourses = [
    {user_id:1 , course_id:1},
    {user_id:3 , course_id:4},
    {user_id:3 , course_id:1},
    {user_id:2 , course_id:3},
    {user_id:1 , course_id:2}
  
];



async function seeding () {
    await db.sync({force: false})
   
    await forEach (users, (user)=> Users.create(user))
    await forEach (categories, (category)=>Categories.create(category))
    await forEach (courses, (course)=> Courses.create(course))
    await forEach (videos, (video)=> Videos.create(video))
    await forEach (userCourses, (userCourse)=> UserCourses.create(userCourse))
    
};


seeding();



