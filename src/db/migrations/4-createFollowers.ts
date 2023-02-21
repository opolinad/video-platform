import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface:QueryInterface): Promise<void> => {
    await queryInterface.createTable('follower', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      followedUserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      followerUserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
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
    await queryInterface.dropTable('follower');
  }
};