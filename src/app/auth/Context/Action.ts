import { updateUserSessionData } from "./ActionTypes";
import { User } from "../../shared/entities/User";

export const updateUserSession = (login: User) => {
    return updateUserSessionData(login)
}