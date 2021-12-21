import * as React from "react";
import { Theme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "../Stack/Stack";

const icon = (
    <Paper sx={{ m: 1 }} elevation={4}>
        <Stack />
    </Paper>
);

export default function Transition() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <Box sx={{ height: 180 }}>
            <FormControlLabel
                control={<Switch checked={checked} onChange={handleChange} />}
                label="Show"
            />
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                <Grow in={checked}>{icon}</Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 1000 } : {})}
                >
                    {icon}
                </Grow>
                <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 1500 } : {})}
                >
                    {icon}
                </Grow>
                <Grow
                    in={checked}
                    style={{ transformOrigin: "0 0 0" }}
                    {...(checked ? { timeout: 2000 } : {})}
                >
                    {icon}
                </Grow>
            </Box>
        </Box>
    );
}
