import { Post } from "../../../shared/entities/Post";
import { PostAction, PostTypes } from "./Types";

export interface IPostState {
    Posts: Post[];
}

export const initialPostState: IPostState = {
    Posts: []
};

export default function PostReducer(state: IPostState, action: PostAction): IPostState {
    switch (action.type) {
        case PostTypes.Posts:
            return { ...state, Posts: action.data };
        default:
            return state;
    }
}