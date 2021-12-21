import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function FormRow() {
    return (
        <React.Fragment>
            <Grid onClick={() => console.log("ok1")} item xs={4}>
                <Item>Item</Item>
            </Grid>
            <Grid onClick={() => console.log("ok2")} item xs={4}>
                <Item>Item</Item>
            </Grid>
            <Grid onClick={() => console.log("ok3")} item xs={4}>
                <Item>Item</Item>
            </Grid>
        </React.Fragment>
    );
}

export default function Stack() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
                <Grid container item spacing={3}>
                    <FormRow />
                </Grid>
            </Grid>
        </Box>
    );
}
