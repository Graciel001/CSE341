const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description:
      'API documentation for the Contacts project (BYU-Pathway W02). This API allows creating, reading, updating, and deleting contacts stored in MongoDB.',
    version: '1.0.0',
  },
  host: 'project1-cse341-0kkg.onrender.com',
  schemes: ['https'],
  basePath: '/',
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    Contact: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      favoriteColor: 'Blue',
      birthday: '1995-07-15',
    },
  },
  tags: [
    {
      name: 'Users',
      description: 'Endpoints for managing users in MongoDB',
    },
  ],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/users.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
