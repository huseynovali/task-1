const express = require('express');
const locationController = require('../controllers/locationController');
const locationRouter = express.Router();

locationRouter.get('/', locationController.getAllLocations);
locationRouter.post('/', locationController.createLocation);
locationRouter.get('/:locationId', locationController.getLocation);
locationRouter.put('/:locationId', locationController.updateLocation);
locationRouter.delete('/:locationId', locationController.deleteLocation);

module.exports = locationRouter;

