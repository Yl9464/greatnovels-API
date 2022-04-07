'use strict'

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('novelsGenres', [{
      novelId: 1,
      genreId: 7
    }, {
      novelId: 1,
      genreId: 11
    }, {
      novelId: 1,
      genreId: 6,

    }, {
      novelId: 2,
      genreId: 7
    }, {
      novelId: 2,
      genreId: 11
    }, {
      novelId: 2,
      genreId: 9
    }, {
      novelId: 2,
      genreId: 6
    }, {
      novelId: 3,
      genreId: 7
    }, {
      novelId: 3,
      genreId: 10
    }, {
      novelId: 4,
      genreId: 7
    }, {
      novelId: 4,
      genreId: 10
    }, {
      novelId: 4,
      genreId: 18
    }, {
      novelId: 4,
      genreId: 14
    }, {
      novelId: 5,
      genreId: 7
    }, {
      novelId: 5,
      genreId: 10
    }, {
      novelId: 6,
      genreId: 7
    }, {
      novelId: 6,
      genreId: 10
    }, {
      novelId: 6,
      genreId: 4
    }, {
      novelId: 6,
      genreId: 13
    }, {
      novelId: 7,
      genreId: 7
    }, {
      novelId: 7,
      genreId: 10
    }, {
      novelId: 7,
      genreId: 1
    }, {
      novelId: 7,
      genreId: 8
    }, {
      novelId: 8,
      genreId: 7
    }, {
      novelId: 8,
      genreId: 12
    }, {
      novelId: 8,
      genreId: 3
    }, {
      novelId: 8,
      genreId: 16
    }, {
      novelId: 9,
      genreId: 7
    }, {
      novelId: 9,
      genreId: 12
    }, {
      novelId: 9,
      genreId: 11
    }, {
      novelId: 10,
      genreId: 7
    }, {
      novelId: 10,
      genreId: 14
    }, {
      novelId: 10,
      genreId: 12
    }, {
      novelId: 11,
      genreId: 7
    }, {
      novelId: 11,
      genreId: 12
    }, {
      novelId: 12,
      genreId: 7
    }, {
      novelId: 12,
      genreId: 15
    }, {
      novelId: 12,
      genreId: 5
    }, {
      novelId: 13,
      genreId: 7
    }, {
      novelId: 13,
      genreId: 15
    }, {
      novelId: 13,
      genreId: 5
    }, {
      novelId: 14,
      genreId: 7
    }, {
      novelId: 14,
      genreId: 15
    }, {
      novelId: 14,
      genreId: 17
    }, {
      novelId: 15,
      genreId: 7
    }, {
      novelId: 15,
      genreId: 10
    }, {
      novelId: 15,
      genreId: 2
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
    return queryInterface.bulkDelete('novelsGenres')
  }
}
