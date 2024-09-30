import { useState, useEffect } from 'react';
import  jwtDecode  from 'jwt-decode';

import { Navigate } from 'react-router-dom';
import RoutesList from './routes/Routes.jsx';
import JoblyApi from './api/api.jsx';
import userContext from './userContext.js';


/** Component for entire page.
 *
 * Props: none
 * State:
 *        currUser => {
 *                      username,
 *                      firstName,
 *                      lastName,
 *                      isAdmin,
 *                      email,
 *                      applications: [jobID, ...]
 *                    }
 *        token (string)
 *
 * Effect: fetches user data upon successful login
 *
 * App -> RoutesList
*/

function JoblyApp() {
  const [currUser, setCurrUser] = useState(null);

  const savedToken = localStorage.getItem('token');
  JoblyApi.token = savedToken || '';
  const [token, setToken] = useState(savedToken || '');
  const [redirect, setRedirect] = useState(false);

  console.log("* JoblyApp");

  /** Logs in a user with a valid username/password.
   *
   * Updates state with token.
   * If login fails to authenticate, renders error message.
  */
  async function handleLogin({ username, password }) {

    const apiToken = await JoblyApi.logInUser({ username, password });

    if (apiToken) {
      setToken(apiToken);
      localStorage.setItem('token', apiToken);
      setRedirect(true);
    }
  }

  useEffect(function fetchUserDataOnLogin() {
    async function fetchUserData() {
      if (token !== "") {
        const username = jwtDecode(token).username;
        const userData = await JoblyApi.getUserDetails(username);

        if (userData) {
          setCurrUser({
            username: username,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            isAdmin: userData.isAdmin,
            applications: userData.applications
          });
        }
      }
    }
    fetchUserData();
  }, [token]);


  /** Logs out current user by resetting states*/
  function handleLogout() {
    setCurrUser(null);
    setToken("");
    localStorage.clear();
    setErrors([]);
  }

  /** Signs up a user when given valid input data
   *
   * Calls login function upon successful signup
   */
  async function handleSignup({ username, password, firstName, lastName, email }) {
    const userData = {
      username,
      password,
      firstName,
      lastName,
      email
    };
    const apiToken = await JoblyApi.registerUser(userData);
    setToken(apiToken);
    localStorage.setItem('token', apiToken);

    if (apiToken) {
      setRedirect(true);
    }
  }

  if (token && !currUser) {
    return <p>Loading...</p>;
  }

  if (redirect) {  // Check for redirect state
    return <Navigate to="/" />;
  }

  return (
    <div className="JoblyApp">
      <userContext.Provider value={{ user: currUser }}>
        <RoutesList
          currUser={currUser}
          handleLogin={handleLogin}
          handleLogout={handleLogout}
          handleSignup={handleSignup}
        />
      </userContext.Provider>
    </div>
  );
}

export default JoblyApp;