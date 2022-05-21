import { Routes, Route, Navigate } from "react-router-dom";

import Home from '../pages/Home';
import Register from '../pages/Register';
import ViewMore from '../pages/ViewMore';
import Edit from '../pages/Edit';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import { RequireAuth } from '../contexts/Auth/RequireAuth';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} exact/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<RequireAuth><Home /></RequireAuth>} />
            <Route path="/form" element={<RequireAuth><Register /></RequireAuth>} />
            <Route path="/view-more/:id" element={<RequireAuth><ViewMore /></RequireAuth>} />
            <Route path="/form/edit/:id" element={<RequireAuth><Edit /></RequireAuth>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}