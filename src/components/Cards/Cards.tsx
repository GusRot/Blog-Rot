import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Cards() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="140"
                    image="https://bn02pap001files.storage.live.com/y4mKqNL58eXL9UnUFbAJv0QLB3hQ8bIsSyc-EKtcRKn4ZsGrXysZt7niye5t0n3uAS-3lKkWowjtZRMgbc17Mv9B8To92fwoJH8jlm9ahxokjYkvtZP5ve-3bAa6R8bTTU_-2PHMM4-tK1BKAKMQKUDmBOam32_nZNTfdt1zL_sTRgjfWMYlADTckxZgNOiM7Mk?width=600&height=600&cropmode=none"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
