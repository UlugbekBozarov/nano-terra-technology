import { ConfigProvider } from "antd";

import { ThemeProvider } from "assets/theme";
import Routes from "routers/Routes";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorWhite: "#ffffff",
          colorPrimary: "#4623E9",
          colorError: "#FF4D4F",
          colorWarning: "#FAAD14",
          colorTextLabel: "#1C1E23",
          colorTextDisabled: "#D0D5DD",
          borderRadius: 8,
        },
        components: {
          Input: {
            controlHeight: 55,
            padding: 10,
            controlPaddingHorizontalSM: 24,
          },
          Button: {
            controlHeight: 36,
          },
        },
      }}
    >
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
