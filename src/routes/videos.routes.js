const {Router} = require('express');
const router = Router();
const videosControllers = require('../controllers/videos.controllers')


router.get('/videos', videosControllers.getAll);
router.post('/videos', videosControllers.create);
router.delete('/videos/:video_id', videosControllers.delete);


module.exports = router;