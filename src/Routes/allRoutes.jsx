import { Navigate } from "react-router-dom";

// Authentication
import Register from "../pages/Authentication/Register";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
// Dashboard
import Dashboard from "../pages/Dashboard";
import Password from "../pages/Authentication/Password";

import UserUpdate from "../pages/Users/Users/update";
import Users from "../pages/Users/Users/index";

// User Profile
import UserProfile from "../pages/Authentication/user-profile";

const authProtectedRoutes = [
  { path: "/index", component: <Dashboard /> },

  { path: "/dashboard", component: <Dashboard /> },


  { path: "/user/update/:id", component: <UserUpdate /> },
  { path: "/users", component: <Users /> },

  // User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
   { path: "/auth/password", component: <Password /> },
  // { path: "/dashboard", component: <Dashboard /> },


  // { path: "/user/update/:id", component: <UserUpdate /> },
  // { path: "/users", component: <Users /> },
  
];

export { authProtectedRoutes, publicRoutes };
