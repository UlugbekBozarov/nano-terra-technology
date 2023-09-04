import { styled } from "styled-components";

export const FormLabel = styled("label").withConfig({
  shouldForwardProp: (prop) => !["disabled", "error", "warning"].includes(prop),
})<{
  disabled?: boolean;
  error?: boolean;
  warning?: boolean;
}>(({ disabled = false, error = false, warning = false, theme }) => ({
  display: "inline-block",
  marginTop: "8px",
  marginBottom: "8px",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "14px",
  color: disabled
    ? theme?.colorTextDisabled
    : error
    ? theme?.colorError
    : warning
    ? theme?.colorWarning
    : theme?.colorTextLabel,
  cursor: "pointer",
}));

export const StyleStar = styled("span")(({ theme }) => ({
  marginLeft: "7px",
  color: theme?.colorError,
}));
