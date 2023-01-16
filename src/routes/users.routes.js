const {Router} = require('express');
const usersController = require('../controllers/users.controllers')

const router = Router();

router.get('/users', usersController.getAll);
router.get('/users/:user_id/courses', usersController.getCoursesByUser);
router.get('/users/:user_id', usersController.getOne);
router.post('/users', usersController.create);
router.patch('/users/:user_id', usersController.updatePartial);
router.delete('/users/:user_id', usersController.delete);


module.exports = router;