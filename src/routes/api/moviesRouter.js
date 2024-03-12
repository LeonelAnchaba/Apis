const express = require('express');
const router = express.Router();
const apiMoviesController = require('../../controllers/api/moviesController');


router.get('/api/movies', apiMoviesController.list);
router.get('/api/movies/:id', apiMoviesController.detail);
router.post('/api/movies', apiMoviesController.store);
router.delete('/api/movies/:id', apiMoviesController.destroy);


module.exports = router;