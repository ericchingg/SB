import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Navigation from "../nav/Navigation.jsx";
import Homepage from "../home/Homepage.jsx";
import CompanyList from "../companies/CompanyList.jsx";
import CompanyDetail from "../companies/CompanyDetail.jsx";
import JobList from "../jobs/JobList.jsx";
import LoginForm from "../user/LoginForm.jsx";
import SignupForm from "../user/SignupForm.jsx";
import ProfileForm from "../user/ProfileForm.jsx";

/** Routes for Jobly
 *
 * Props: currUser => {
 *                      username,
 *                      firstName,
 *                      lastName,
 *                      isAdmin,
 *                      email,
 *                      applications: [jobID, ...]
 *                    }
 *        handleLogin function
 *        handleLogout function
 *        handleSignup function
 *
 * State: None
 *
 * JoblyApp -> RoutesList -> {Navigation, LoginForm, SignupForm, Logout, Homepage, CompanyList, CompanyDetail, JobList}
 */

function RoutesList({ currUser, handleLogin, handleLogout, handleSignup }) {
  console.log("* RoutesList");

  /** Protected Route component to restrict access based on authentication status */
  function ProtectedRoute({ children }) {
    return currUser ? children : <Navigate to="/login" />;
  }

  /** Redirect authenticated users away from login/signup */
  function RedirectIfLoggedIn({ children }) {
    return currUser ? <Navigate to="/" /> : children;
  }

  return (
    <div>
      <BrowserRouter>
        <Navigation currUser={currUser} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          {/* Routes for non-logged-in users */}
          <Route path="/login" element={
            <RedirectIfLoggedIn>
              <LoginForm handleLogin={handleLogin} />
            </RedirectIfLoggedIn>
          } />
          <Route path="/signup" element={
            <RedirectIfLoggedIn>
              <SignupForm handleSignup={handleSignup} />
            </RedirectIfLoggedIn>
          } />

          {/* Routes for logged-in users */}
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfileForm />
            </ProtectedRoute>
          } />
          <Route path="/companies" element={
            <ProtectedRoute>
              <CompanyList />
            </ProtectedRoute>
          } />
          <Route path="/companies/:handle" element={
            <ProtectedRoute>
              <CompanyDetail />
            </ProtectedRoute>
          } />
          <Route path="/jobs" element={
            <ProtectedRoute>
              <JobList />
            </ProtectedRoute>
          } />

          {/* Catch-all route to redirect to homepage */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RoutesList;