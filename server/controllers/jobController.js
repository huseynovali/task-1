const Job = require('../models/jobSchema');

const jobController = {
  getAllJobs: async (req, res) => {
    try {
      const jobs = await Job.find();
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getJobLocations : async (req, res) => {
    const { jobId } = req.params;
    try {
      const jobLocations = await JobAndLocation.find({ job: jobId }).populate('location');
      res.status(200).json(jobLocations);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  createJob: async (req, res) => {
    const { title, summary, description, minSalary, maxSalary } = req.body;
    try {
      const newJob = await Job.create({ title, summary, description, minSalary, maxSalary });
      res.status(201).json(newJob);
    } catch (error) {
      res.status(500).json(error);
    }
  },


  getJob: async (req, res) => {
    const { jobId } = req.params;
    try {
      const job = await Job.findById(jobId);
      if (!job) {
        return res.status(404).json({ message: 'job not found !' });
      }
      res.status(200).json(job);
    } catch (error) {
      res.status(500).json(error);
    }
  },


  updateJob: async (req, res) => {
    const { jobId } = req.params;
    const { title, summary, description, minSalary, maxSalary } = req.body;
    try {
      const updatedJob = await Job.findByIdAndUpdate(
        jobId,
        { title, summary, description, minSalary, maxSalary },
        { new: true }
      );
      if (!updatedJob) {
        return res.status(404).json({ message: 'job not found !' });
      }
      res.status(200).json(updatedJob);
    } catch (error) {
      res.status(500).json(error);
    }
  },


  deleteJob: async (req, res) => {
    const { jobId } = req.params;
    try {
      const deletedJob = await Job.findByIdAndDelete(jobId);
      if (!deletedJob) {
        return res.status(404).json({ message: 'job not found !' });
      }
      res.status(200).json({ message: 'delete job !' });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}


module.exports = {
  jobController
};
