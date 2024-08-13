import { useState } from "react"
import { useAuth } from "../../shared/hooks/useAuth"
import { Post } from "../../shared/entities/Post"
import { updatePostsList } from "./context/Action"

const PostNew = () => {
    const { state, dispatch } = useAuth()
    const [text, setText] = useState('')

    const handlePublish = () => {
        let newPost = new Post()
        newPost.created = new Date();
        newPost.edited = new Date();
        newPost.like = 0;
        newPost.text = text;
        newPost.user = state.loginState.user;
        newPost.id = state.postState.Posts.length > 0 ? state.postState.Posts.reduce((max, item) => (item.id > max.id ? item : max)).id + 1 : 0;

        let { Posts } = state.postState;
        Posts.push(newPost)

        dispatch(updatePostsList(Posts))

        setText('')
    }

    return (
        <section className="w-1/2 mx-auto py-5 px-2 border-b-[1px] border-x-[1px]">
            <textarea className="w-full outline-none text-gray-300 bg-slate-700 p-3" onChange={(e) => setText(e.target.value)} value={text} />
            <button className="outline-1 outline px-5 py-2 ml-[1px]" onClick={handlePublish}>Publicar </button>
        </section>
    )
}

export default PostNew