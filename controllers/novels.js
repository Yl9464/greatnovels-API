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

const getAllNovelInforByPartialTitle = async (request, response) => {
  const { title } = request.params

  const titlePartial = await models.Novels.findOne({
    where: {
      title: { [models.Op.like]: `%${ title.toLowerCase()}%` }
    },
    include: [
      { model: models.Authors },
      { model: models.Genres },
    ]
  })

  return titlePartial
    ? response.send(titlePartial)
    : response.sendStatus(404)
}

module.exports = {
  getAllNovels,
  getAllNovelInforByPartialTitle
}
