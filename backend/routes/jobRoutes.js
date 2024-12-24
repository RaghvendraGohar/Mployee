import { Router } from 'express';
import fs from 'fs/promises';
import path from 'path';
const router = Router();

router.get('/', async (req, res) => {
  const { location } = req.query;

  try {
    const dataPath = path.resolve('data/data.json');
    const jobsData = JSON.parse(await fs.readFile(dataPath, 'utf8'));
    let filteredJobs = jobsData;

    if (location) {
      filteredJobs = filteredJobs.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    res.json(filteredJobs);
  } catch (error) {
    console.error("Error loading JSON file:", error);
    res.status(500).json({ error: "Failed to load jobs data" });
  }
});

export default router;
