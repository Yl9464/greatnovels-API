const models = require('../models')


const getAllGenres = async (request, response) => {
  const genres = await models.Genres.findAll()

  return response.send(genres)
}

const getAllNovelInfoByGenreId = async (request, response) => {
  const { id } = request.params

  const genreId = await models.Authors.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Authors }]
    }]
  })

  return genreId
    ? response.send(genreId)
    : response.sendStatus(404)
}

module.exports = {
  getAllGenres,
  getAllNovelInfoByGenreId
}
