import { Routes, Route, Navigate } from "react-router-dom";

import Home from '../pages/Home';
import Form from '../pages/Form';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/form" element={<Form />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
    );
}