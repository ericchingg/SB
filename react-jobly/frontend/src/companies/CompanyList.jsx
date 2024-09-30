import SearchForm from "../search/SearchForm.jsx";
import CompanyCardList from "./CompanyCardList.jsx";
import JoblyApi from "../api/api.jsx";
import { useState, useEffect } from "react";

/** List all companies
 *
 * Props: None
 * State: Array of companies, Search parameter
 * Effect: fetches companies on mount, re-searches when a new
 *         search param is received
 *
 * RoutesList -> CompanyList -> {SearchForm, CompanyCardList}
 */

function CompanyList() {
  const [companies, setCompanies] = useState({ data: null, isLoading: true });
  const [searchParam, setSearchParam] = useState("");
  console.log("* CompanyList");

  useEffect(function fetchCompaniesOnSearch() {
    async function fetchCompanies() {
      let companyResponse;
      if (searchParam === "") {
        companyResponse = await JoblyApi.getCompanies();
      }
      else {
        companyResponse = await JoblyApi.findCompanies(searchParam);
      }
      setCompanies(
        {
          data: companyResponse,
          isLoading: false
        }
      );
    }
    fetchCompanies();
  }, [searchParam]);

  /** Update company and search param state when
   *  a new parameter is received
   */
  function onCompanySearch(searchParam) {
    setCompanies(currCompanies => ({...currCompanies, isLoading: true}));
    setSearchParam(searchParam);
  }

  if (companies.isLoading) return <p>Loading...</p>;

  return (
    <div>
      <SearchForm handleSearch={onCompanySearch} />
      {searchParam
        ? <h3>Results for '{searchParam}'</h3>
        : <h3>All Companies</h3>
      }
      <CompanyCardList companies={companies.data} />
    </div>
  );
};

export default CompanyList;