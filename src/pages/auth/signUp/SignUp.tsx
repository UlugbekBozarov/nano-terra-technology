import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { Space } from "antd";

import { ControlledInput, ControlledPasswordInput } from "components/form";
import { addUser } from "redux/users";

import { AuthLayout } from "../components";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formStore = useForm({
    defaultValues: {
      ivv: "",
      viib: "",
      iib: "",
      username: "",
      password: "",
    },
  });

  const { handleSubmit } = formStore;

  const submitHandler = handleSubmit((data) => {
    try {
      dispatch(
        addUser({
          userId: data?.username,
          firstName: data?.ivv,
          username: data?.username,
          password: data?.password,
        })
      );
      navigate("/");
    } catch (error) {
      console.error("Catching error - SignUp handleSubmit function: ", error);
    }
  });

  return (
    <AuthLayout
      title="Tizimga kirish"
      description="Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie lacus. Faucibus arcu aliquam nullam nunc dictumst."
      submitText="Kirish"
      onSubmit={submitHandler}
      go={{
        text: "Already have an account",
        linkText: "Login",
        link: "/",
      }}
    >
      <FormProvider {...formStore}>
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <ControlledInput
            label="IVV"
            name="ivv"
            rules={{
              required: {
                value: true,
                message: "You mast enter your IVV",
              },
            }}
            placeholder="IVVni kiriting"
          />
          <ControlledInput
            label="VIIB Boshqarmasi"
            name="viib"
            placeholder="VIIB Boshqarmasini kiriting"
          />
          <ControlledInput
            label="Tuman IIBo’lim"
            name="iib"
            placeholder="Tuman IIBo’limni kiriting"
          />
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

export default SignUp;
