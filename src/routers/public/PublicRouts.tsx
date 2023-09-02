import { RouterProvider, createBrowserRouter } from "react-router-dom";

import SignIn from "pages/auth/signIn/SignIn";
import SignUp from "pages/auth/signUp/SignUp";
import { Spinner } from "components/common";

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
  return (
    <RouterProvider
      router={router}
      fallbackElement={<Spinner size="large" width="100%" height="100vh" />}
    />
  );
};

export default PublicRouts;
