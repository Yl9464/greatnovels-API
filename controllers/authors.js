const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

const getNovelByLastNamePartial = async (request, response) => {
  const { nameLast } = request.params

  const lastPartial = await models.Authors.findOne({
    where: {
      nameLast: { [models.Op.like]: `%${ nameLast.toLowerCase()}%` }
    },
    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
  })

  return lastPartial
    ? response.send(lastPartial)
    : response.sendStatus(404)
}

module.exports = {
  getAllAuthors,
  getNovelByLastNamePartial
}
