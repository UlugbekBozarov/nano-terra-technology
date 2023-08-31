import { Layout } from "Layout";
import { ConfigProvider } from "antd";

import { ThemeProvider } from "assets/theme";
import Dashboard from "pages/dashboard/Dashboard";

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
          Breadcrumb: {},
        },
      }}
    >
      <ThemeProvider>
        <Layout>
          <Dashboard />
        </Layout>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default App;
