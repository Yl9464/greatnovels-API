const express = require('express')
const { getAllAuthors, getAllNovelInfoByAuthoId } = require('./controllers/authors')
const { getAllGenres, getAllNovelInfoByGenreId } = require('./controllers/genres')
const { getAllNovels, getAllNovelInforByNovelId } = require('./controllers/novels')

const app = express()

app.get('/authors', getAllAuthors)
app.get('/authors/:id', getAllNovelInfoByAuthoId)

app.get('/genres', getAllGenres)
app.get('/genres/:id', getAllNovelInfoByGenreId)

app.get('/novels', getAllNovels)
app.get('/novels/:id', getAllNovelInforByNovelId)


app.listen(1377, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 1377...')
})
