const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

const getAllNovelInfoByAuthoId = async (request, response) => {
  const { id } = request.params

  const authorId = await models.Authors.findOne({
    where: { id },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
  })

  return authorId
    ? response.send(authorId)
    : response.sendStatus(404)
}

module.exports = {
  getAllAuthors,
  getAllNovelInfoByAuthoId
}
