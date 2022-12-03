import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";

import { useMemo } from "react";
// import CssBaseline from "@mui/material/CssBaseline";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { themeSettings } from "./scenes/theme.js";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));
    return (
        <div className="App">
            <CssBaseline />
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route 
                            path="/home" 
                            element={isAuth ? <HomePage /> : <Navigate to="/" />}
                            />
                        <Route 
                            path="/profile/:userId" 
                            element={isAuth ? <ProfilePage /> : <Navigate to="/" />} 
                            />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
