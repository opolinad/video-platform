import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface:QueryInterface): Promise<void> => {
    await queryInterface.createTable('video', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING
      },
      thumbnailUrl: {
        allowNull: false,
        type: DataTypes.STRING
      },
      published: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      userId: {
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
    await queryInterface.dropTable('video');
  }
};