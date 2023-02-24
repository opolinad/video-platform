import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
    up: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.addColumn('video', 'description', {
            type: DataTypes.TEXT
        });
    },
    down: async (queryInterface: QueryInterface): Promise<void> => {
        await queryInterface.removeColumn('video', 'description');
    }
};