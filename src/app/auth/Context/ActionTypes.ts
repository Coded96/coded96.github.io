import { IActions } from "../../shared/Context/context"
import { User } from "../../shared/entities/User"
import { LoginTypes } from "./Types"

export const updateUserSessionData = (data: User): IActions => ({
    type: LoginTypes.UserSession,
    data
})