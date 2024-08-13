import { Dispatch } from "react";
import { LoginAction } from "./Types";
import { updateUserSessionData } from "./ActionTypes";
import { User } from "../../shared/entities/User";

export const updateUserSession = (login: User, dispatch?: Dispatch<LoginAction>) => {
    if (dispatch) dispatch(updateUserSessionData(login))
}