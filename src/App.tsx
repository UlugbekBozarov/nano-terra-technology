import { ConfigProvider } from "antd";

import { ThemeProvider } from "assets/theme";
import AuthSignIn from "pages/auth/signIn/SignIn";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4623E9",
          borderRadius: 6,
        },
        components: {
          Input: {
            controlHeight: 55,
            padding: 10,
            controlPaddingHorizontalSM: 24,
          },
        },
      }}
    >
      <ThemeProvider>
        <div>
          <AuthSignIn />
        </div>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
