const express = require('express');
const jobRouter = express.Router();
const jobController = require('../controllers/jobController');


jobRouter.get('/', jobController.getAllJobs);


jobRouter.post('/', jobController.createJob);


jobRouter.get('/:jobId', jobController.getJob);


jobRouter.put('/:jobId', jobController.updateJob);


jobRouter.delete('/:jobId', jobController.deleteJob);

module.exports = jobRouter;
