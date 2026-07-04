import express from "express";

import {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

const router = express.Router();

router.get("/", getJobs);

router.post("/", addJob);

router.put("/:id", updateJob);

router.delete("/:id", deleteJob);

export default router;
