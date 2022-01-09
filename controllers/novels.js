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

const getAllNovelInforByNovelId = async (request, response) => {
  const { id } = request.params

  const novelId = await models.Novels.findOne({
    where: { id },
    include: [
      { model: models.Authors },
      { model: models.Genres },
    ]
  })

  return novelId
    ? response.send(novelId)
    : response.sendStatus(404)
}

module.exports = {
  getAllNovels,
  getAllNovelInforByNovelId
}
