import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Page404() {
    return (
        <div>
            <br />
            <br />
            <Typography variant="h6">Ops... Página não existe</Typography>
            <br />
            <br />
            <Link to="/">
                <button>Voltar para página principal</button>
            </Link>
        </div>
    );
}
