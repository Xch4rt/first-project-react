import { createMuiTheme } from '@material-ui/core/styles';
// agregando material design a nuestro proyecto
const theme = createMuiTheme({
    //configuracion
    typography: {
        useNextVariants: true
    },
    palette: {
        primary: {
            main : '#10A75F'
        },
        common : {
            white : 'white'
        },
        secondary : {
            main : '#e53935'
        }
    },
    spacing: 10
});

export default theme;