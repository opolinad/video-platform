import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<object | number> => {
    return queryInterface.bulkInsert('user', [
      {
        firstName: 'Testing1',
        lastName: 'User',
        email: 'Testing1@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Testing2',
        lastName: 'User',
        email: 'Testing2@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Testing3',
        lastName: 'User',
        email: 'Testing3@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Testing4',
        lastName: 'User',
        email: 'Testing4@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Testing5',
        lastName: 'User',
        email: 'Testing5@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Testing6',
        lastName: 'User',
        email: 'Testing6@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Testing7',
        lastName: 'User',
        email: 'Testing7@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Testing8',
        lastName: 'User',
        email: 'Testing8@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Testing9',
        lastName: 'User',
        email: 'Testing9@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Testing10',
        lastName: 'User',
        email: 'Testing10@mail.com',
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png?20201213175635',
        password: '$2b$10$KU.nc8XfXgrY.Y3s0g3QCeZyTOYQrKZ7vdm9CmqQUR/b7AnP0nQWi',
        roleId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
  },
  down: async (queryInterface: QueryInterface): Promise<object> => {
    return queryInterface.bulkDelete('user', null, {});
  }
};