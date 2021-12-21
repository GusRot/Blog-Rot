import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode, Typography } from "@mui/material";
import App from "./App";
import { GlobalStyle } from "./components/Styles/Global";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        primary: {
            ...amber,
            ...(mode === "dark" && {
                main: amber[300],
            }),
        },
        ...(mode === "dark" && {
            background: {
                default: deepOrange[900],
                paper: deepOrange[900],
            },
        }),
        text: {
            ...(mode === "light"
                ? {
                      primary: grey[900],
                      secondary: grey[800],
                  }
                : {
                      primary: "#fff",
                      secondary: grey[500],
                  }),
        },
    },
});

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export function MyApp() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    return (
        <>
            <Typography variant="button">{theme.palette.mode} mode</Typography>
            <IconButton
                sx={{ ml: 1 }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
            >
                {theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                ) : (
                    <Brightness4Icon />
                )}
            </IconButton>
        </>
    );
}

export default function ToggleColorMode() {
    const [mode, setMode] = React.useState<"light" | "dark">("light");
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <CssBaseline />
                    <Container maxWidth="lg">
                        <Header />
                        <App />
                        <Box sx={{ height: "100vh" }} />
                    </Container>
                    <GlobalStyle />
                </BrowserRouter>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
