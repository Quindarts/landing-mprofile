import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import HomePage from "../Page/Homepage/HomePage";

function MyRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default MyRouter;
