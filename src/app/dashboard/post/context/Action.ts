import { updatePostsListData } from "./ActionTypes";
import { Post } from "../../../shared/entities/Post";

export const updatePostsList = (posts: Post[]) => {
    // updatePostsListData(posts)
    return updatePostsListData(posts)
}