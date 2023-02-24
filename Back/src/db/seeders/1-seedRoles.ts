import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<object | number> => {
    return queryInterface.bulkInsert('role', [
        {id: 1, name: 'Admin', createdAt: new Date(), updatedAt: new Date()},
        {id: 2, name: 'Teacher', createdAt: new Date(), updatedAt: new Date()},
        {id: 3, name: 'Student', createdAt: new Date(), updatedAt: new Date()},
    ]);
  },
  down: async (queryInterface: QueryInterface): Promise<object> => {
    return queryInterface.bulkDelete('role', null, {});
  }
};