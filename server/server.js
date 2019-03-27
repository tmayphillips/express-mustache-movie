const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')
const path = require('path')
const uuid = require('uuid')
const movieRoutes = require('./routes/movies')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/css/',express.static('css'))
app.use('/movies',movieRoutes)

const VIEWS_PATH = path.join(__dirname, '/views');
console.log(VIEWS_PATH)



app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views','./views')
app.set('view engine','mustache')

app.listen(3000,() => {
  console.log("Server is running...")
})
