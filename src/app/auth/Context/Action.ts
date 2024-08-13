import { Dispatch } from "react";
import { updateUserSessionData } from "./ActionTypes";
import { User } from "../../shared/entities/User";
import { IActions } from "../../shared/Context/context";

export const updateUserSession = (login: User, dispatch?: Dispatch<IActions>) => {
    if (dispatch) dispatch(updateUserSessionData(login))
}