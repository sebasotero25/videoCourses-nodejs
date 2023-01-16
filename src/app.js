const express = require('express');
const userRoutes = require('./routes/users.routes');
const categoriesRoutes = require('./routes/categories.routes');
const coursesRoutes = require('./routes/courses.routes');
const videosRoutes = require('./routes/videos.routes');
const usersCoursesRoute = require('./routes/usersCourses.routes')


const app = express();

app.use(express.json());

app.use('/api/v1', usersCoursesRoute);
app.use('/api/v1', userRoutes);
app.use('/api/v1', categoriesRoutes);
app.use('/api/v1', coursesRoutes);
app.use('/api/v1', videosRoutes);

console.log("Escuchando en el puerto 8000");

module.exports = app;