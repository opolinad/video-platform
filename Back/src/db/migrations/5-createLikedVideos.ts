import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface:QueryInterface): Promise<void> => {
    await queryInterface.createTable('likedVideo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      likedByUserId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      videoId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'video',
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
    await queryInterface.dropTable('likedVideo');
  }
};