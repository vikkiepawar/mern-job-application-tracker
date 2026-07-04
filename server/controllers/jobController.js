import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 });

  res.json(jobs);
};

export const addJob = async (req, res) => {
  const job = await Job.create(req.body);

  res.status(201).json(job);
};

export const updateJob = async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);

  res.json({
    message: "Job Deleted",
  });
};


