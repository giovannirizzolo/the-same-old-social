import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";

import { useMemo } from "react";
// import CssBaseline from "@mui/material/CssBaseline";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./scenes/theme.js";

function App() {
    const mode = useState('light');
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
        <div className="App">
            <CssBaseline />
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/profile/:userId" element={<ProfilePage />} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
