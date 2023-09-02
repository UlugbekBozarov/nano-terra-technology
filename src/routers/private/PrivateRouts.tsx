import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Layout } from "Layout";

import Dashboard from "pages/dashboard/Dashboard";
import Employees from "pages/employees/Employees";
import { Spinner } from "components/common";

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
        element: <Employees />,
      },
      {
        path: "user-info",
        element: <Employees />,
      },
      {
        path: "user-kpi",
        element: <Employees />,
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
