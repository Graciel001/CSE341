const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// GET all users
router.get(
  '/',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Get all users'
    #swagger.description = 'Retrieve a list of all users from MongoDB.'
  */
  usersController.getAll
);

// GET a single user by ID
router.get(
  '/:id',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Get a single user by ID'
    #swagger.description = 'Retrieve a user by their unique ID.'
    #swagger.parameters['id'] = {
      description: 'User ID',
      required: true,
      type: 'string'
    }
  */
  usersController.getSingle
);

// POST a new user
router.post(
  '/',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Create a new user'
    #swagger.description = 'Add a new user to MongoDB.'
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'User data to create',
      required: true,
      schema: { $ref: '#/definitions/Contact' }
    }
  */
  usersController.createUser
);

// PUT (update) a user by ID
router.put(
  '/:id',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Update a user'
    #swagger.description = 'Update a user’s details by their ID.'
    #swagger.parameters['id'] = {
      description: 'User ID',
      required: true,
      type: 'string'
    }
    #swagger.parameters['body'] = {
      in: 'body',
      description: 'Updated user data',
      required: true,
      schema: { $ref: '#/definitions/Contact' }
    }
  */
  usersController.updateUser
);

// DELETE a user by ID
router.delete(
  '/:id',
  /*
    #swagger.tags = ['Users']
    #swagger.summary = 'Delete a user'
    #swagger.description = 'Remove a user by their ID.'
    #swagger.parameters['id'] = {
      description: 'User ID',
      required: true,
      type: 'string'
    }
  */
  usersController.deleteUser
);

module.exports = router;
