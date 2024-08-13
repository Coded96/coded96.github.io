import { useMemo, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import LoginReducer, { initialState } from "../../auth/Context/Reducer";
import { updateUserSession } from "../../auth/Context/Action";
import { AuthContext } from "../Context/context";
import { User } from "../entities/User";

export const AuthProvider = ({ children }: { children: any }) => {
    const [session, setSession] = useLocalStorage("user", false);
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(LoginReducer, { ...initialState });

    // call this function when you want to authenticate the user
    const login = async (data: any) => {
        setSession(true);
        let { username, password } = data;
        let user = new User()
        user.username = username;
        user.password = password;
        updateUserSession(user, dispatch)
        navigate("/");
    };

    // call this function to sign out logged in user
    const logout = () => {
        setSession(false);
        updateUserSession(new User(), dispatch)
        navigate("/Login", { replace: true });
    };

    const value = useMemo(
        () => ({
            state,
            dispatch,
            session,
            login,
            logout
        }),
        [session]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};