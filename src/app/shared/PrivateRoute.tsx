import { Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { User } from "./entities/User";
import { updateUserSession } from "../auth/Context/Action";

export const PrivateRoute = ({ children }: { children: any }) => {
    const { session, dispatch, state } = useAuth();
    const [registeredData] = useLocalStorage("usuarios", new User())

    if (!session)
        return <Navigate to="/login" />;
    else if (state.loginState.user.username == undefined)
        updateUserSession(registeredData, dispatch)

    return children;
};