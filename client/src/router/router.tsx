import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/sites/Home";
import Layout from "../layout/Layout";
import DashboardLayout from "../layout/DashboardLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Public layout
    children: [
      { path: "/", element: <Home /> },

      // Add more public pages here
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />, // Admin layout
    children: [
      // /dashboard/add-admin
      // Add more admin pages here
    ],
  },
]);

export default router;
