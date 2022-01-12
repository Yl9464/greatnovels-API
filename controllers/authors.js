const models = require('../models')

const getAllAuthors = async (request, response) => {
  const authors = await models.Authors.findAll()

  return response.send(authors)
}

const getAuthorsByIdentifier = async (request, response) => {
  const { identifier } = request.params

  const author = await models.Authors.findOne({
    where:
     {
       [models.Op.or]: [
         { nameLast: { [models.Op.like]: `%${identifier}%` } },
         { id: identifier }
       ],
     },

    include: [{
      model: models.Novels,
      include: [{ model: models.Genres }]
    }]
  })

  return author
    ? response.send(author)
    : response.sendStatus(404)
}

module.exports = {
  getAllAuthors,
  getAuthorsByIdentifier,
}
