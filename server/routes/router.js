const express = require('express')
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description: this is the home route
 * @method: get / 
 */

route.get('/', services.HomeRoute);

/**
 * @description: this is the add user route
 * @method: get / add_user
 */

route.get('/add-user', services.add_user)

/**
 * @description: this is the update user route
 * @method: get / update
 */

route.get('/update-user', services.update_user)

//   API

route.post('/api/users', controller.create)
route.get('/api/users', controller.find)
route.put('/api/users/:id', controller.update)
route.delete('/api/users/:id', controller.delete)

module.exports = route;