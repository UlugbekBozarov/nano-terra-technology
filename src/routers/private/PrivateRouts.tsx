import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Spinner } from "components/common";

const Layout = lazy(() => import("Layout/Layout"));
const Dashboard = lazy(() => import("pages/dashboard/Dashboard"));
const Employees = lazy(() => import("pages/employees/Employees"));
const Tasks = lazy(() => import("pages/tasks/Tasks"));
const UserInfo = lazy(() => import("pages/userInfo/UserInfo"));
const UserKpi = lazy(() => import("pages/userKpi/UserKpi"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "invoice",
        element: <Employees />,
      },
      {
        path: "employees",
        element: <Employees />,
      },
      {
        path: "tasks",
        element: <Tasks />,
      },
      {
        path: "user-info",
        element: <UserInfo />,
      },
      {
        path: "user-kpi",
        element: <UserKpi />,
      },
    ],
  },
]);

const PrivateRouts = () => {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Spinner size="large" width="100%" height="100vh" />}
    />
  );
};

export default PrivateRouts;
