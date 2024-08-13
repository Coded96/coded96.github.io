import { Post } from "../../../shared/entities/Post";

export enum PostTypes {
    Posts = "POSTLIST",
}

export type PostAction =
    | { type: PostTypes.Posts; data: Post[] }
