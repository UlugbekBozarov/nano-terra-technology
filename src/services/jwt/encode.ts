import { IUser } from "redux/users";

const header = {
  alg: "HS256",
  typ: "JWT",
};

function base64urlEncode(str: string) {
  let base64 = btoa(str);
  return base64.replace("+", "-").replace("/", "_").replace(/=+$/, "");
}

const jwtEncode = (user: IUser) => {
  const encodedHeader = base64urlEncode(JSON.stringify(header));
  const encodedUser = base64urlEncode(JSON.stringify(user));

  return `${encodedHeader}.${encodedUser}`;
};

export default jwtEncode;
