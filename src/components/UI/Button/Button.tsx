import { Button, createTheme, ThemeProvider } from "@mui/material";

const CustomButton = (props: any) => {

    const theme = createTheme({
        palette: {
            primary: {
                main: props.color,
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Button
                color="primary"
                variant={props.variant}
                style={{ margin: props.margin, padding: props.padding }}
                startIcon={props.icon}
            >
                {props.title}
            </Button>
        </ThemeProvider>

    )
}

export default CustomButton;