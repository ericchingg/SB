import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Job card
 *
 * Props: job object like
 *        {id, title, salary, equity}
 * State: None
 *
 * JobCardList -> JobCard
 */

function JobCard({ job, currentUser }) {
  console.log("* JobCard");
  
  // State to track whether the user has applied for the job
  const [hasApplied, setHasApplied] = useState(false);

  useEffect(() => {
    // Check if the user has already applied for this job
    const checkApplicationStatus = async () => {
      try {
        const response = await axios.get(`/api/users/${currentUser}/applications`);
        const appliedJobs = response.data; // Assuming this returns an array of applied job IDs
        setHasApplied(appliedJobs.includes(job.id));
      } catch (error) {
        console.error("Error checking application status:", error);
      }
    };

    checkApplicationStatus();
  }, [job.id, currentUser]);

  const handleApply = async () => {
    try {
      await axios.post(`/api/jobs/${job.id}/apply`, { username: currentUser });
      setHasApplied(true);
    } catch (error) {
      console.error("Error applying for the job:", error);
    }
  };

  return (
    <div>
      <h3>{job.title}</h3>
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
      <button onClick={handleApply} disabled={hasApplied}>
        {hasApplied ? "Applied" : "Apply for Job"}
      </button>
    </div>
  );
}

export default JobCard;