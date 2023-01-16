const db = require('../utils/database');
const {DataTypes}= require('sequelize');

const UserCourses = db.define('user_courses', {}, { timestamps: false });

module.exports = UserCourses;
