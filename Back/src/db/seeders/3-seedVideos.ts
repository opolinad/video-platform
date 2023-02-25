import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface): Promise<object | number> => {
    return queryInterface.bulkInsert('video', [
      {
        title: 'Video1',
        url: 'https://www.youtube.com/embed/c2OEtrdb5VI',
        thumbnailUrl: 'https://i.ytimg.com/vi/c2OEtrdb5VI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKn04Y5LAnNrJhgVXu8H6MT7lZsw',
        published: false,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Video2',
        url: 'https://www.youtube.com/embed/ATHgQC0QZ0o',
        thumbnailUrl: 'https://i.ytimg.com/vi/ATHgQC0QZ0o/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAj62wtOPGrbvF1xIkYR_REudSaGA',
        published: false,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Video3',
        url: 'https://www.youtube.com/embed/7voIt1TQY6E',
        thumbnailUrl: 'https://i.ytimg.com/vi/7voIt1TQY6E/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBd0dIqcVJkM7fAW_5GBbvBeCSMZw',
        published: false,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Video4',
        url: 'https://www.youtube.com/embed/JDkybaU-90s',
        thumbnailUrl: 'https://i.ytimg.com/vi/JDkybaU-90s/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhilh-xPHGxRJe0jNDcJEWbHF97A',
        published: false,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Video5',
        url: 'https://www.youtube.com/embed/bmRuTt0OkJE',
        thumbnailUrl: 'https://i.ytimg.com/vi/bmRuTt0OkJE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1LZXqTpsSYi2O8XbozwWlT5GKVA',
        published: false,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Video6',
        url: 'https://www.youtube.com/embed/lXHacHtSKxg',
        thumbnailUrl: 'https://i.ytimg.com/vi/lXHacHtSKxg/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYSUepVlfnypdiw3GxZV2CiWFiWQ',
        published: false,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Video7',
        url: 'https://www.youtube.com/embed/qqYeuVLG4t8',
        thumbnailUrl: 'https://i.ytimg.com/vi/qqYeuVLG4t8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9jINN3_xJON0jbOPIAgxDIAw8ng',
        published: false,
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Video8',
        url: 'https://www.youtube.com/embed/7kHg0BU9tCo',
        thumbnailUrl: 'https://i.ytimg.com/vi/7kHg0BU9tCo/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLY0NWoeIxhfYZ345vzEAPzEAsLQ',
        published: false,
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: async (queryInterface: QueryInterface): Promise<object> => {
    return queryInterface.bulkDelete('video', null, {});
  }
};