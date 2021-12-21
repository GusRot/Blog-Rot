import React from "react";
import { Routes, Route } from "react-router-dom";
import Curiosities from "../Curiosiosities/Curiosities";
import Page404 from "../Page404";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Curiosities />} />
            <Route path="/profissional" element={<Page404 />} />
            <Route path="/sobre" element={<Page404 />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
