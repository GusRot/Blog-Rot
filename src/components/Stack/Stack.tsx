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

interface Props {
    items: String[];
}

function FormRow(props: Props) {
    return (
        <React.Fragment>
            {props.items.map((item, index) => (
                <Grid key={index + 10} item xs={4}>
                    <Item>{item}</Item>
                </Grid>
            ))}
        </React.Fragment>
    );
}

export default function Stack() {
    const items = [
        { item: ["item1", "item2", "item3"] },
        { item: ["item4", "item5", "item6"] },
        { item: ["item7", "item8", "item9"] },
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                {items.map((item, index) => (
                    <Grid key={index + 20} container item spacing={1}>
                        <FormRow items={item.item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
