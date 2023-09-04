import { Button } from "antd";
import { styled } from "styled-components";

export const StyledImageBlock = styled("div")<{
  width?: string;
  height?: string;
  size?: "small" | "medium" | "large";
}>(({ theme, width, height, size }) => ({
  position: "relative",
  width:
    width ||
    (size === "small" ? "80px" : size === "medium" ? "100px" : "120px"),
  height:
    height ||
    (size === "small" ? "80px" : size === "medium" ? "100px" : "120px"),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: theme?.borderRadius,
  background: "#F5F5F5",
  padding: "10px",
  overflow: "hidden",
  transition: "all 0.3s",
  "& button": {
    opacity: 0,
    transition: "all 0.3s",
  },
  "&:hover button": {
    opacity: 1,
  },
}));

export const StyledImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
});

export const ModalContent = styled("div")({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  "@media(min-width: 768px)": {
    padding: "30px",
  },
});

export const ModalCloseButton = styled(Button)({
  position: "absolute",
  top: "20px",
  right: "20px",
  width: "50px",
  height: "50px",
  background: "#fff",
  // boxShadow: "0px 0px 3px -1px rgba(0, 0, 0, 0.8)",
  "&:hover": {
    background: "#fff",
  },
});

export const StyledIconButtonBlock = styled("div").withConfig({
  shouldForwardProp: (prop) => prop !== "size" && prop !== "isDelete",
})<any>(({ size, isDelete = false }) => ({
  position: "absolute",
  top: size === "small" || size === "medium" ? 0 : "5px",
  right: size === "small" || size === "medium" ? 0 : "5px",
  width:
    size === "small" || size === "medium" ? "100%" : isDelete ? "75px" : "35px",
  height: size === "small" || size === "medium" ? "100%" : "35px",
  display: "flex",
  justifyContent: "flex-end",
}));

export const StyledIconButton = styled(Button)({
  width: "35px",
  height: "35px",
  background: "rgba(0, 0, 0, 0.6)",
  boxShadow: "0px 0px 3px -1px rgba(0, 0, 0, 0.8)",
  "&:hover": {
    background: "rgba(0, 0, 0, 0.7)",
  },
});
