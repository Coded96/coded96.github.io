import { Dispatch } from "react";
import { updatePostsListData } from "./ActionTypes";
import { Post } from "../../../shared/entities/Post";
import { IActions } from "../../../shared/Context/context";

export const updatePostsList = (posts: Post[], dispatch?: Dispatch<IActions>) => {
    if (dispatch) dispatch(updatePostsListData(posts))
}