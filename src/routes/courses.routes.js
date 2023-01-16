const {Router} = require('express');
const coursesControllers = require('../controllers/courses.controllers');

const router = Router();

router.get('/courses/info', coursesControllers.getAllInfo);
router.get('/courses', coursesControllers.getAll);
router.get('/courses/:course_id', coursesControllers.getOne);
router.post('/courses', coursesControllers.create);
router.patch('/courses/:course_id', coursesControllers.update);
router.delete('/courses/:course_id', coursesControllers.delete);


module.exports = router;