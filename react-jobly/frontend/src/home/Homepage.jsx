import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../userContext.js";
import "./Homepage.css";

/** Homepage for Jobly
 *
 * Props: None
 * State: None
 *
 * RoutesList -> Homepage
 */

function Homepage() {
  const { user } = useContext(userContext);
  console.log("* Homepage");
  return (
    <div className="homepage">
      <div className="container text-center">
        <h1>Jobly</h1>
        <h3>Find your job today!</h3>
        {user && <h2>Welcome back, {user.firstName}!</h2>}
        {!user &&
          <>
            <Link to={'/login'} className="btn btn-dark fw-bold me-3">Log In</Link>
            <Link to={'/signup'} className="btn btn-dark fw-bold me-3">Sign Up</Link>
          </>
        }
      </div>
    </div>
  );
}

export default Homepage;