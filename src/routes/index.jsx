import { Routes, Route, Navigate } from "react-router-dom";

import Home from '../pages/Home';
import Register from '../pages/Register';
import ViewMore from '../pages/ViewMore';
import Edit from '../pages/Edit';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Private = ({ Item }) => {
    const signed = true;
    return signed > 0 ? <Item /> : <SignIn />;
};

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} exact/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Private Item={Home} />} />
            <Route path="/form" element={<Register />} />
            <Route path="/view-more/:id" element={<ViewMore />} />
            <Route path="/form/edit/:id" element={<Edit />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}