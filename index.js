/* eslint-disable no-console */
const express = require('express')
const { getAllAuthors, getNovelByLastNamePartial } = require('./controllers/authors')
const { getAllGenres, getAllNovelInfoByGenreId } = require('./controllers/genres')
const { getAllNovels, getAllNovelInforByNovelId } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:nameLast', getNovelByLastNamePartial)
app.get('/genres', getAllGenres)
app.get('/genres/:id', getAllNovelInfoByGenreId)
app.get('/novels', getAllNovels)
app.get('/novels/:id', getAllNovelInforByNovelId)

app.listen(1377, () => {
  console.log('Listening on port 1377...')
})
