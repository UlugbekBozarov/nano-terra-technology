import { Space } from "antd";

import { Input } from "components";

import { AuthLayout } from "../layout";

const AuthSignIn = () => {
  return (
    <AuthLayout
      title="Tizimga kirish"
      description="Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie lacus. Faucibus arcu aliquam nullam nunc dictumst."
      submitText="Kirish"
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Input name="login" label="Login" />
        <Input name="password" label="Password" />
      </Space>
    </AuthLayout>
  );
};

export default AuthSignIn;
