import { NavLink } from "react-router-dom";
import "./CompanyCard.css";

/** Company card
 *
 * Props: company object
 * State: None
 *
 * CompanyCardList -> CompanyCard
 */

function CompanyCard({ company }) {
  console.log("* CompanyCard");

  return (
    <NavLink to={`/companies/${company.handle}`}>
      <div>
        {company.logoUrl &&
          <img src={company.logoUrl} />
        }
        <p><b>{company.name}</b></p>
        <p>{company.description}</p>
      </div>
    </NavLink>
  );
}

export default CompanyCard;