const Users = require('./users.models');
const Courses = require('./courses.models');
const Categories = require('./categories.models');
const Videos = require('./videos.models');
const userCourses = require('./userCourses.models');

const initModels = ()=>{
    Users.belongsToMany(Courses, {through: userCourses, foreignKey: 'user_id'});
    Courses.belongsToMany(Users, {through: userCourses, foreignKey: 'course_id'});

    Categories.hasMany(Courses, {foreignKey: 'category_id'});
    Courses.belongsTo(Categories, { foreignKey: 'category_id'});

    Courses.hasMany(Videos, {foreignKey: 'course_id'})
    Videos.belongsTo( Courses, {foreignKey: 'course_id'})
}

module.exports = initModels;