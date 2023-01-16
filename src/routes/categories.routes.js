const {Router} = require('express');
const categoriesControllers = require('../controllers/categories.controllers');
const router = Router();



router.get('/categories', categoriesControllers.getAll);
router.post('/categories', categoriesControllers.create);
router.put('/categories/:category_id', categoriesControllers.update);
router.delete('/categories/:category_id', categoriesControllers.delete);

module.exports = router;