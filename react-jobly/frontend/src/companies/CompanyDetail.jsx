import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import JoblyApi from "../api/api.jsx";
import JobCardList from "../jobs/JobCardList.jsx";

/** Company detail page
 *
 * Props: None
 * State: {isLoading, data}
 *
 * RoutesList -> CompanyDetail -> JobCardList
 */

function CompanyDetail() {
  const [company, setCompany] = useState({ data: null, isLoading: true });
  const { handle } = useParams();
  console.log("* CompanyDetail");

  useEffect(function fetchCompanyOnRender() {
    async function fetchCompany() {
      const companyResponse = await JoblyApi.getCompany(handle);
      setCompany({
        data: companyResponse,
        isLoading: false
      });
    }
    fetchCompany();
  }, [handle]);

  if (company.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>{company.data.name}</h1>
      <h4>{company.data.description}</h4>
      <JobCardList jobs={company.data.jobs} />
    </div>
  );
}

export default CompanyDetail;