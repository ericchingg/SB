import JobCard from "./JobCard";

/** List of job components
 *
 * Props: array of job objects like
 *      [{id, title, salary, equity}, ...]
 * State: None
 *
 *
 * JobList -> JobCardList
 */

function JobCardList({ jobs }) {
  console.log("* JobCardList");

  return (
    <div>
      <div>
        {jobs.map(job => {
          return (
            <div key={job.id} className="card-body border">
              <JobCard job={job} />
            </div>);
        })}
      </div>
    </div >
  );
};

export default JobCardList;