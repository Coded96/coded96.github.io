import { createContext } from "react";
import { ILoginState } from "../../auth/Context/Reducer";
import { LoginAction } from "../../auth/Context/Types";

export interface authProvider {
    state: ILoginState;
    dispatch: React.Dispatch<LoginAction>;
    session: boolean;
    login: (data: any) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext({} as authProvider)