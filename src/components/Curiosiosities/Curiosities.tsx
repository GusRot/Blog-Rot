import { Container, Grid } from "@mui/material";
import * as React from "react";
import Cards from "../Cards/Cards";
import Music from "../Music/Music";
import Stack from "../Stack/Stack";
import Transition from "../Transition/Transition";

export default function App() {
    return (
        <>
            <Music />
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={{ ls: 8, xs: 4, sm: 4, md: 8 }}
                    columns={{ ls: 8, xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={2} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <Cards />
                    </Grid>
                </Grid>
            </Container>
            <Transition />
            <Stack />
        </>
    );
}
