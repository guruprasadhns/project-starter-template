import { useMemo } from "react";
import modules from "./modules";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "./modules/theme";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const createRoutes = () => {
  return modules
    .map((i) => i.routes().props.children)
    .reduce((prev, curr) => prev.concat(curr), []);
};

function App() {
  const routes = useMemo(() => createRoutes(), []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>{routes}</Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
