/* eslint-disable no-console */
const express = require('express')
const { getAllAuthors, getAuthorsByIdentifier } = require('./controllers/authors')
const { getAllGenres, getAllNovelInfoByGenreId } = require('./controllers/genres')
const { getAllNovels, getAllNovelInforByPartialTitle } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:identifier', getAuthorsByIdentifier)
app.get('/genres', getAllGenres)
app.get('/genres/:id', getAllNovelInfoByGenreId)
app.get('/novels', getAllNovels)
app.get('/novels/:title', getAllNovelInforByPartialTitle)


app.listen(1377, () => {
  console.log('Listening on port 1377...')
})
