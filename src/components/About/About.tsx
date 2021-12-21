import { Box } from "@mui/material";
import React from "react";
import Stack from "../Stack/Stack";
import Transition from "../Transition/Transition";

export default function About() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px",
                }}
            >
                <Stack />
            </Box>
            <Box
                sx={{
                    margin: "10px",
                }}
            >
                <Transition />
            </Box>
        </>
    );
}
