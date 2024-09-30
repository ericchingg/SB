const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = "";

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Search for companies with search term query */

  static async findCompanies(searchParam) {
    const data = { nameLike: searchParam };
    let res = await this.request(`companies/`, data);
    return res.companies;
  }

  /** Get a list of companies */

  static async getCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }


  /** Get a list of jobs */

  static async getJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  /** Search for jobs with search term query */

  static async findJobs(searchParam) {
    const data = { title: searchParam };
    let res = await this.request(`jobs/`, data);
    return res.jobs;
  }

  /**  Register a user with data from sign up form. Returns a token on success. */

  static async registerUser({ username, password, firstName, lastName, email }) {
    let res = await this.request('auth/register', {
      username,
      password,
      firstName,
      lastName,
      email
    },
      "POST");

    return res.token;
  }

  /** Logs in a user with a valid username and password.
   *
   *  For authenticated username/password, returns a token.
   *
   *  For failed authentication, returns error object =>
   *      { error: message, status}
   */

  static async logInUser({ username, password }) {
    let res = await this.request('auth/token', {
      username,
      password
    },
      "POST");

    this.token = res.token;
    return this.token;
  }

  /** Gets a user's details by username */
  static async getUserDetails(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  /**updateProfile method*/

  static async updateProfile(username, profileData) {
    let res = await this.request(`users/${username}`, profileData, "PATCH");
    return res.user;
  }

  /**Apply to job method*/

  static async jobApply(username, id) {
    let res = await this.request(`users/${username}/jobs/${id}`, {}, "POST");
    return res;
  }

}


export default JoblyApi;

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
