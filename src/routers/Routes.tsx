import { useSelector } from "react-redux";

import PublicRouts from "./public/PublicRouts";
import PrivateRouts from "./private/PrivateRouts";

const Routes = () => {
  const isSignIn = useSelector((state: any) => state?.isLogin);

  if (isSignIn) {
    return <PrivateRouts />;
  } else {
    return <PublicRouts />;
  }
};

export default Routes;
