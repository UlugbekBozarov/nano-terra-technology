import { FC, ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "antd";

interface IThemeProvider {
  children?: ReactNode;
}

const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const { token } = theme.useToken();

  return <StyledThemeProvider theme={token}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
