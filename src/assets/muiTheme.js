import {
    createTheme,
    ThemeProvider
} from "@mui/material";

const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#23252B'
        },
        secondary: {
            main: '#0E0E0E'
        },
        action: {
            main: '#EDB518'
        },
        fourth: {
            light: '#FFFFFF33',
            main: '#FFFFFF',
            grey: '#A0A0A0',
            dark: '#141519'
        }
    }
});

const myEscapeTheme = createTheme(colorTheme, {
    typography: {},
    components: {
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: colorTheme.palette.action.main
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'white',
                    '&.Mui-selected': {
                        color: colorTheme.palette.action.main
                    }
                }
            }
        },
    }
});

export default function MyEscapeTheme(props) {
    return (
        <ThemeProvider theme={myEscapeTheme}>
            {props.children}
        </ThemeProvider>
    );
}