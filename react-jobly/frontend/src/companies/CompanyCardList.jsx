import CompanyCard from "./CompanyCard";

/** Company Card
 *
 * Props: array of companies like
 *      [{handle, name, description, numEmployees, logoUrl}, ...]
 *
 * State: none
 *
 * CompanyList -> CompanyCardList -> CompanyCard
 */
function CompanyCardList({ companies }) {
  console.log("* CompanyCardList");

  return (
    <div>
      <div>
        {companies.map(company => {
          return (
            <div
              key={company.handle}
              className="card-body border">
              <CompanyCard company={company} />
            </div>);
        })}
      </div>
    </div >
  );
}

export default CompanyCardList;