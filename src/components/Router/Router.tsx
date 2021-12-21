import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../About/About";
import Main from "../Main/Main";
import Page404 from "../Page404";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profissional" element={<Page404 />} />
            <Route path="/sobre" element={<About />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}
