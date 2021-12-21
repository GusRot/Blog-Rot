import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

export default function Music() {
    const theme = useTheme();

    return (
        <Card
            sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "85px",
                width: 351,
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px",
                    alignItems: "center",
                    height: "80px",
                }}
            >
                <CardContent
                    sx={{
                        flex: "1 0 auto",
                        height: "20px",
                        padding: "0 14px",
                    }}
                >
                    <Typography component="div" variant="h6">
                        Live From Space
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        component="div"
                    >
                        Mac Miller
                    </Typography>
                </CardContent>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 0,
                        pb: 0,
                        height: "50px",
                    }}
                >
                    <IconButton aria-label="previous">
                        {theme.direction === "rtl" ? (
                            <SkipNextIcon sx={{ width: 20 }} />
                        ) : (
                            <SkipPreviousIcon sx={{ width: 20 }} />
                        )}
                    </IconButton>
                    <IconButton aria-label="play/pause">
                        <PlayArrowIcon sx={{ height: 20, width: 20 }} />
                    </IconButton>
                    <IconButton aria-label="next">
                        {theme.direction === "rtl" ? (
                            <SkipPreviousIcon sx={{ width: 20 }} />
                        ) : (
                            <SkipNextIcon sx={{ width: 20 }} />
                        )}
                    </IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{ width: 151 }}
                image="https://bn02pap001files.storage.live.com/y4mKqNL58eXL9UnUFbAJv0QLB3hQ8bIsSyc-EKtcRKn4ZsGrXysZt7niye5t0n3uAS-3lKkWowjtZRMgbc17Mv9B8To92fwoJH8jlm9ahxokjYkvtZP5ve-3bAa6R8bTTU_-2PHMM4-tK1BKAKMQKUDmBOam32_nZNTfdt1zL_sTRgjfWMYlADTckxZgNOiM7Mk?width=600&height=600&cropmode=none"
                alt="Live from space album cover"
            />
        </Card>
    );
}
