import { lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { Box, Spinner } from "components/common";
import { ErrorBoundary } from "services/error";

const SignIn = lazy(() => import("pages/auth/signIn/SignIn"));
const SignUp = lazy(() => import("pages/auth/signUp/SignUp"));

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: "*",
    element: (
      <Box
        width="100%"
        height="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        Page not found
      </Box>
    ),
  },
]);

const PublicRouts = () => {
  redirect("/");

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Spinner size="large" width="100%" height="100vh" />}
    />
  );
};

export default PublicRouts;
