import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface:QueryInterface): Promise<void> => {
    await queryInterface.createTable('role', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface:QueryInterface): Promise<void> => {
    await queryInterface.dropTable('role');
  }
};