import { Fragment, FC } from "react";
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form";
import { InputProps } from "antd";

import { Label } from "components/common";
import { Error } from "components/form/components";
import { Close } from "components/Icons";

import { StyledClearButton, StyledInput } from "./Input.style";

type IControlledInput = {
  name: string;
  rules?: Omit<
    RegisterOptions<FieldValues, any>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  label?: string;
} & InputProps;

const ControlledInput: FC<IControlledInput> = ({
  name,
  rules,
  label,
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
          <StyledInput
            id={name}
            {...props}
            {...field}
            value={value || ""}
            onChange={inputChangeHandler(onChange)}
            status={error ? "error" : undefined}
            suffix={
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

export default ControlledInput;
