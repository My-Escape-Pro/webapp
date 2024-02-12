import {
    createTheme,
    ThemeProvider
} from "@mui/material";

const colorTheme = createTheme({
    palette: {
        primary: {
            main: '#000407'
        },
        secondary: {
            main: '#79031D'
        },
        third: {
            main: '#EDB518'
        },
        fourth: {
            main: '#F5F7F7'
        }
    }
});

const myEscapeTheme = createTheme(colorTheme, {
    // typography: {
    //     fontFamily: 'Quicksand, sans-serif'
    // },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: `
    //             @font-face {
    //                 font-family: 'Quicksand';
    //                 font-weight: normal;
    //                 src: local('Quicksand') local('Quicksand-Regular') url(${Quicksand}) format('truetype');
    //             }
    //         `
    //     }
    // }
});

export default function MyEscapeTheme(props) {
    return (
        <ThemeProvider theme={myEscapeTheme}>
            {props.children}
        </ThemeProvider>
    );
}