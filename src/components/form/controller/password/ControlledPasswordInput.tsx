import { Fragment } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { Error, Label } from "components/form/components";
import { Close } from "components/Icons";

import { StyledClearButton, StyledPasswordInput } from "./PasswordInput.style";

const ControlledPasswordInput = ({
  name,
  rules,
  label = "Password",
  onChange,
  ...props
}: any) => {
  const { control } = useFormContext();

  const inputChangeHandler = (formChangeHandler: any) => (event: any) => {
    formChangeHandler(event);
    if (onChange) {
      onChange(event, event?.target?.value);
    }
  };

  const handleClear = (formChangeHandler: any) => () => {
    formChangeHandler("");
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({
        field: { value, onChange, ...field },
        fieldState: { error },
      }) => (
        <Fragment>
          <Label htmlFor={name} required={rules?.required} error={!!error}>
            {label}
          </Label>
          <StyledPasswordInput
            id={name}
            {...props}
            {...field}
            value={value || ""}
            onChange={inputChangeHandler(onChange)}
            status={error ? "error" : undefined}
            prefix={
              <StyledClearButton
                size="small"
                shape="circle"
                onClick={handleClear(onChange)}
                display={value ? "flex" : "none"}
              >
                <Close />
              </StyledClearButton>
            }
          />
          <Error error={error} />
        </Fragment>
      )}
    />
  );
};

export default ControlledPasswordInput;
