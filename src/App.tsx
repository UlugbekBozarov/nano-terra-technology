import { Layout } from "Layout";
import { ConfigProvider } from "antd";

import { ThemeProvider } from "assets/theme";
import Dashboard from "pages/dashboard/Dashboard";
import Employees from "pages/employees/Employees";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#4623E9",
          // colorBorderSecondary: ""
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
        <Layout>
          {/* <Dashboard /> */}
          <Employees />
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
