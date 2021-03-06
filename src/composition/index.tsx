import React from "react";
import { ThemeProvider } from "styled-components";

import theme, { GlobalStyles } from "app/style";
import AppContainer from 'app/components/app-container';

import Header from "./header";
import FormPage from "./form-page";

const App: React.FC<Record<string, unknown>> = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppContainer>
            <Header />
            <FormPage />
        </AppContainer>
    </ThemeProvider>
);

export default App;
