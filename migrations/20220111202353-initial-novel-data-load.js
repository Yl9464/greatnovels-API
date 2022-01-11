'use strict'

module.exports = {
  up: async (queryInterface) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.bulkInsert('novels', [{
      title: 'Dracula',
      authorId: 1
    }, {
      title: 'The Picture of Dorian Gray',
      authorId: 2
    }, {
      title: 'The Color Purple',
      authorId: 3
    }, {
      title: 'War and Peace',
      authorId: 4
    }, {
      title: 'A Tale of Two Cities',
      authorId: 5
    }, {
      title: 'The Crucible',
      authorId: 6
    }, {
      title: 'The Three Musketeers',
      authorId: 7
    }, {
      title: 'The Hound of the Baskervilles',
      authorId: 8
    }, {
      title: 'The Strange Case of Dr. Jekyll and Mr. Hyde',
      authorId: 9
    }, {
      title: 'Crime and Punishment',
      authorId: 10
    }, {
      title: 'Murder on the Orient Express',
      authorId: 11
    }, {
      title: 'Fahrenheit 451',
      authorId: 12
    }, {
      title: 'Animal Farm',
      authorId: 13
    }, {
      title: 'The Time Machine',
      authorId: 14
    }, {
      title: 'Things Fall Apart',
      authorId: 15
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
    return queryInterface.bulkDelete('novels')
  }
}
