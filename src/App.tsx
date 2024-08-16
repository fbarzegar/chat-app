import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SocketProvider from "./features/socket-context";
import Router from "./router";

const theme = createTheme();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SocketProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </SocketProvider>
    </ThemeProvider>
  );
};

export default App;
