import { useForm, FormProvider } from "react-hook-form";
import { useSelector } from "react-redux";
import { Space } from "antd";

import { ControlledInput, ControlledPasswordInput } from "components/form";
import { IUser } from "redux/users";
import { jwtEncode } from "services/jwt";
import { setItemCookie } from "services/storage";
import { STORAGE_NAMES } from "constants/Storage.constants";

import { AuthLayout } from "../components";

const SignIn = () => {
  const users = useSelector((store: any) => store?.users);

  const formStore = useForm({
    defaultValues: {
      username: "dev",
      password: "123456",
    },
  });

  const { handleSubmit, setError } = formStore;

  const submitHandler = handleSubmit((data) => {
    const user = users?.find(
      (u: IUser) =>
        u?.username === data?.username && u?.password === data?.password
    );
    if (user) {
      setItemCookie(STORAGE_NAMES.authorization, jwtEncode(user));
      setItemCookie(STORAGE_NAMES.user, user);
      window.location.href = "/";
    } else {
      setError("username", {
        type: "manual",
        message: "User not found",
      });
      setError("password", {
        type: "manual",
        message: "User not found",
      });
    }
  });

  return (
    <AuthLayout
      title="Tizimga kirish"
      description="Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie lacus. Faucibus arcu aliquam nullam nunc dictumst."
      submitText="Kirish"
      go={{
        text: "Don't have an account?",
        linkText: "Create",
        link: "/sign-up",
      }}
      onSubmit={submitHandler}
    >
      <FormProvider {...formStore}>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <ControlledInput
            label="Login"
            name="username"
            rules={{
              required: {
                value: true,
                message: "You mast enter your login",
              },
            }}
            placeholder="Loginni kiriting"
          />
          <ControlledPasswordInput
            name="password"
            rules={{
              required: {
                value: true,
                message: "You mast enter your password",
              },
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            placeholder="Parolni kiriting"
          />
        </Space>
      </FormProvider>
    </AuthLayout>
  );
};

export default SignIn;
