import { createContext, Dispatch } from "react";
import { ILoginState, } from "../../auth/Context/Reducer";
import { IPostState } from "../../dashboard/post/context/Reducer"
import { LoginAction } from "../../auth/Context/Types";
import { PostAction } from "../../dashboard/post/context/Types";

export type IStates = { loginState: ILoginState; postState: IPostState; }
export type IActions = LoginAction | PostAction

export interface authProvider {
    state: IStates;
    dispatch: Dispatch<IActions>;
    session: boolean;
    login: (data: any) => Promise<void>;
    logout: () => void;
}

export const combineDispatch = (...dispatches: any[]) => (action: any) => dispatches.forEach((dispatch) => dispatch(action));

export const AuthContext = createContext({} as authProvider)