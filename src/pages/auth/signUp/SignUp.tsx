import { Space } from "antd";

import { Input } from "components";

import { AuthLayout } from "../layout";

const SignUp = () => {
  return (
    <AuthLayout
      title="Tizimga kirish"
      description="Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie lacus. Faucibus arcu aliquam nullam nunc dictumst."
      submitText="Kirish"
    >
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <Input name="ivv" label="IVV" placeholder="IVVni kiriting" />
        <Input
          name="viib"
          label="VIIB Boshqarmasi"
          placeholder="VIIB Boshqarmasini kiriting"
        />
        <Input
          name="ivv"
          label="Tuman IIBo’lim"
          placeholder="Tuman IIBo’limni kiriting"
        />
        <Input name="login" label="Login" placeholder="Loginni kiriting" />
        <Input name="password" label="Parol" placeholder="Parolni kiriting" />
      </Space>
    </AuthLayout>
  );
};

export default SignUp;
