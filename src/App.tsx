import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./Components/Layout/MainLayout";
import HomePage from "./Page/HomePage";
// import "./style/utils/_demo.scss"
function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;
