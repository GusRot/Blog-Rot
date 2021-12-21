import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Cards from "../Cards/Cards";
import Music from "../Music/Music";

export default function Main() {
    return (
        <>
            <Box
                sx={{
                    padding: "0",
                    display: "flex",
                    justifyContent: "center",
                    pl: 1,
                    pb: 1,
                    margin: "10px",
                }}
            >
                <Music />
            </Box>
            <Container maxWidth="lg">
                <Grid
                    container
                    spacing={{ ls: 2, xs: 2, sm: 2, md: 2 }}
                    columns={{ ls: 2, xs: 4, sm: 8, md: 12 }}
                >
                    <Grid item xs={4} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Cards />
                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Cards />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
