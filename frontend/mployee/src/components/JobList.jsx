import React from 'react';

const JobList = ({ jobs, onJobSelect }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job._id} className="job-item" onClick={() => onJobSelect(job)}>
          <h3>{job.title}</h3>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
