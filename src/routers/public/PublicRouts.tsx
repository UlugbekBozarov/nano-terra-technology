import { lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import { Spinner } from "components/common";

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
