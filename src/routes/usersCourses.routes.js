const { Router } = require('express');
const usersCoursesController = require('../controllers/usersCourses.controllers');

const router = Router();

router.get('/users/courses', usersCoursesController.getAll);
router.post('/users/courses', usersCoursesController.create);



module.exports = router;