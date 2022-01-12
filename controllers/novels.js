const models = require('../models')

const getAllNovels = async (request, response) => {
  const novels = await models.Novels.findAll({
    include: [
      { model: models.Authors },
      { model: models.Genres },
    ]
  })

  return response.send(novels)
}

const getAllNovelByIdentifier = async (request, response) => {
  const { identifier } = request.params

  const novel = await models.Novels.findOne({
    where: {
      [models.Op.or]: [
        { title: { [models.Op.like]: `%${identifier}%` } },
        { id: identifier }
      ],

    },
    include: [
      { model: models.Authors },
      { model: models.Genres },
    ]
  })

  return novel
    ? response.send(novel)
    : response.sendStatus(404)
}

module.exports = {
  getAllNovels,
  getAllNovelByIdentifier
}
