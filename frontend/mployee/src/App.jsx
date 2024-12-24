import React, { useState, useEffect } from 'react';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [searchLocation, setSearchLocation] = useState('');

  useEffect(() => {
    fetch(`/api/jobs${searchLocation ? `?location=${searchLocation}` : ''}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [searchLocation]);

  return (
    <div className="app">
      <SearchBar setSearchLocation={setSearchLocation} />
      <div className="main-content">
        <JobList jobs={jobs} onJobSelect={setSelectedJob} />
        {selectedJob && <JobDetails job={selectedJob} />}
      </div>
    </div>
  );
};

export default App;
