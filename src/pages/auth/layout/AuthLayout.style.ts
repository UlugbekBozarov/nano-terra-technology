import { Button } from "antd";
import { styled } from "styled-components";

export const AuthContainer = styled("div")({
  display: "flex",
});

export const LeftBlock = styled("div")(({ theme }) => ({
  height: "100vh",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 72px",
  background: theme.colorPrimary,
  "@media(min-width: 1200px)": {
    display: "flex",
    width: "50%",
  },
}));

export const StyledImageBlock = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "32px",
});

export const StyledImageRightBlock = styled("div")({
  display: "flex",
  justifyContent: "center",
  marginBottom: "32px",
  "@media(min-width: 1200px)": {
    display: "none",
  },
});

export const StyledText = styled("p")(({ theme }) => ({
  textAlign: "center",
  fontFamily: "Mulish",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  color: theme?.colorWhite,
}));

export const RightBlock = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0 24px",
  "@media(min-width: 1200px)": {
    width: "50%",
    padding: "0 72px",
  },
});

export const StyledContent = styled("div")({
  width: "100%",
  "@media(min-width: 576px)": {
    width: "380px",
  },
});

export const StyledButton = styled(Button)({
  width: "100%",
  height: "57px",
  marginTop: "20px",
});
