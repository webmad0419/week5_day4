const express = require('express')
const router = express.Router()

const multer = require('multer')
const upload = multer({ dest: './public/uploads/img/' });

const Picture = require('../models/picture.model')


router.get('/upload', (req, res, next) => res.render('upload-picture'))

router.post('/upload', upload.single('photo'), (req, res) => {

  console.log(req.file)   // <= Esto lo añade Multer :D

  const pic = new Picture({
    name: req.body.imagename,
    path: `/uploads/img/${req.file.filename}`,
    originalName: req.file.originalname
  });

  pic.save()
    .then(x => res.render('list'))
    .catch(err => console.log('Error!:', err))
});


router.get('/list', (req, res) => {
  Picture.find()
    .then(pictures => res.render('list', { pictures }))
    .catch(err => console.log('Error!:', err))
})


module.exports = router;
