import { User } from "../../shared/entities/User"
import { LoginAction, LoginTypes } from "./Types"

export const updateUserSessionData = (data: User): LoginAction => ({
    type: LoginTypes.UserSession,
    data
})