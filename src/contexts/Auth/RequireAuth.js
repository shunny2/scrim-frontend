import { useContext } from "react";
import { AuthContext } from "./AuthContext";

import SignIn from "../../pages/SignIn";

export const RequireAuth = (props) => {
    const auth = useContext(AuthContext);

    if(!auth.user) {
        return <SignIn />;
    }

    return props.children;
}