import { IActions } from "../../../shared/Context/context"
import { Post } from "../../../shared/entities/Post"
import { PostTypes } from "./Types"

export const updatePostsListData = (data: Post[]): IActions => ({
    type: PostTypes.Posts,
    data
})