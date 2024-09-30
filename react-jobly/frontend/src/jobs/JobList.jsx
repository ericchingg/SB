import JobCardList from "./JobCardList.jsx";
import SearchForm from "../search/SearchForm.jsx";
import JoblyApi from "../api/api.jsx";
import { useState, useEffect } from "react";

/** List of all jobs
 *
 * Props: None
 * State: Array of jobs, Search parameter
 * Effect: Fetches jobs on mount, re-searches when a new search
 *         param is received
 *
 *
 * RoutesList -> JobList -> {SearchForm, JobCardList}
 */

function JobList() {
  const [jobs, setJobs] = useState({ data: null, isLoading: true });
  const [searchParam, setSearchParam] = useState("");
  console.log("* JobList");

  useEffect(function fetchJobsOnSearch() {
    async function fetchJobs() {
      let jobResponse;
      if (searchParam === '') {
        jobResponse = await JoblyApi.getJobs();
      } else {
        jobResponse = await JoblyApi.findJobs(searchParam);
      }
      setJobs(
        {
          data: jobResponse,
          isLoading: false
        }
      );
    }
    fetchJobs();
  }, [searchParam]);

  /** Update job and search parameter state when
   *  a new parameter is received
   */
  function onJobSearch(searchParam) {
    setJobs(currJobs => ({...currJobs, isLoading: true}));
    setSearchParam(searchParam);
  }

  if (jobs.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <SearchForm handleSearch={onJobSearch} />
      {searchParam
        ? <h3>Results for '{searchParam}'</h3>
        : <h3>All Jobs</h3>}
      <JobCardList jobs={jobs.data} />
    </div>
  );
}

export default JobList;