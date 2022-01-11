'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('genres', [{
      name: 'Adventure'
    }, {
      name: 'African Literature'
    }, {
      name: 'Crime'
    }, {
      name: 'Drama'
    }, {
      name: 'Dystopia'
    }, {
      name: 'Fantasy'
    }, {
      name: 'Fiction'
    }, {
      name: 'French Literature'
    }, {
      name: 'Gothic'
    }, {
      name: 'Historical Fiction'
    }, {
      name: 'Horror'
    }, {
      name: 'Mystery'
    }, {
      name: 'Plays'
    }, {
      name: 'Russian Literature'
    }, {
      name: 'Science Fiction'
    }, {
      name: 'Thriller'
    }, {
      name: 'Time Travel'
    }, {
      name: 'War'
    },
    ])
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.bulkDelete('genres')
  }
}
