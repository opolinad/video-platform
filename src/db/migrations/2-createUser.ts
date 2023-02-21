import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface:QueryInterface): Promise<void> => {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      photoUrl: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      },
      roleId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'role',
          key: 'id'
        }
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
    await queryInterface.dropTable('user');
  }
};