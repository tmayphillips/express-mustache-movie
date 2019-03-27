const bodyParser = require('body-parser')
const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const path = require('path')

let movies = [
]

router.get('/',(req,res) => {
  res.render('index',{movies: movies})
})

router.get('/add-movie',(req,res) => {
  res.render('add-movie')
})

router.get('/remove-movie',(req,res) => {
  res.render('remove-movie')
})

router.post('/add-movie',(req,res) => {
  let title = req.body.title
  let desc = req.body.desc
  let genre = req.body.genre
  let posterURL = req.body.posterURL

  console.log(title);

  let movie = {uuid:uuid(),title: title, desc: desc, genre: genre, posterURL: posterURL}
  movies.push(movie)
  res.redirect('/movies')
})

router.post('/remove-movie',(req,res) => {
  console.log("heelo");
  let deleteTitle = req.body.deleteTitle
  movies = movies.filter((movie) => {
    return movie.uuid != deleteTitle
  })
  res.redirect('/movies')
})

router.get('/:genre', (req,res) => {
    let genre = req.params.genre
    let filteredGenre = movies.filter((movie) => {
      return movie.genre == genre
})
res.render('index',{movies: filteredGenre})
})

module.exports = router
