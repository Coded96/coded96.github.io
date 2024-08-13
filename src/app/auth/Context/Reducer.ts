import { User } from "../../shared/entities/User";
import { LoginAction, LoginTypes } from "./Types";

export interface ILoginState {
    user: User;
}

export const initialLoginState: ILoginState = {
    user: new User(),
};

export default function LoginReducer(state: ILoginState, action: LoginAction): ILoginState {
    switch (action.type) {
        case LoginTypes.UserSession:
            return { ...state, user: action.data };
        default:
            return state;
    }
}