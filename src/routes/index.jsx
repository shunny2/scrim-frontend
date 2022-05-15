import { Routes, Route, Navigate } from "react-router-dom";

import Home from '../pages/Home';
import Form from '../pages/Register';
import ViewMore from '../pages/ViewMore';
import Edit from '../pages/Edit';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact/>
            <Route path="/form" element={<Form />} />
            <Route path="/view-more/:id" element={<ViewMore />} />
            <Route path="/form/edit/:id" element={<Edit />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}