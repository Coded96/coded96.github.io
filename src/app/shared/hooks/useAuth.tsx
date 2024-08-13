import { useMemo, useContext, useReducer, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { updateUserSession } from "../../auth/Context/Action";
import { AuthContext } from "../Context/context";
import { User } from "../entities/User";
import LoginReducer, { initialLoginState } from "../../auth/Context/Reducer";
import PostReducer, { initialPostState } from "../../dashboard/post/context/Reducer";

export const AuthProvider = ({ children }: { children: any }) => {
    const [session, setSession] = useLocalStorage("user", false);
    const navigate = useNavigate();

    const combineDispatch = (...dispatches: any[]) => (action: any) => dispatches.forEach((dispatch) => dispatch(action));

    const [loginState, loginDispatch] = useReducer(LoginReducer, initialLoginState);
    const [postState, postDispatch] = useReducer(PostReducer, initialPostState);

    const dispatch = useCallback(combineDispatch(loginDispatch, postDispatch), [loginDispatch, postDispatch])
    const state = useMemo(() => ({ loginState, postState }), [loginState, postState])

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
        [session, state.loginState.user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};