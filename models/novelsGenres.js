const NovelsGenres = (connection, Sequelize, Genres, Novels) => {
  return connection.define('novelsGenres', {
    genreId: { type: Sequelize.INTEGER, primayKey: true, reference: { model: Genres, key: 'id' } },
    novelId: { type: Sequelize.INTEGER, primayKey: true, reference: { model: Novels, key: 'id' } },
  })
}

module.exports = NovelsGenres
