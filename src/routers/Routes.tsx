import { getItemCookie } from "services/storage";
import { STORAGE_NAMES } from "constants/Storage.constants";

import PublicRouts from "./public/PublicRouts";
import PrivateRouts from "./private/PrivateRouts";

const Routes = () => {
  if (getItemCookie(STORAGE_NAMES.authorization)) {
    return <PrivateRouts />;
  } else {
    return <PublicRouts />;
  }
};

export default Routes;
