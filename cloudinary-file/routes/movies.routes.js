const express = require('express')
const router = express.Router()

const cloudinaryConfig = require('../config/cloudinary.config')

const Movie = require('../models/movie.model')

router.get('/', (req, res) => {
    Movie.find()
        .then(movies => res.render('movies/movies-list', { movies }))
        .catch(err => console.log('Error!:', err))
})





router.get('/add', (req, res) => res.render('movies/movie-add'))

router.post('/add', cloudinaryConfig.single('photo'), (req, res) => {
    const { title, description } = req.body
    const imgPath = req.file.url
    const imgName = req.file.originalname

    const newMovie = new Movie({ title, description, imgPath, imgName })

    newMovie.save()
        .then(x => res.redirect('/'))
        .catch(err => console.log('Error!:', err))
})

module.exports = router