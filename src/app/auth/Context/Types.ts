import { User } from "../../shared/entities/User";

export enum LoginTypes {
    UserSession = "USERSESSION",
}

export type LoginAction =
    | { type: LoginTypes.UserSession; data: User }
