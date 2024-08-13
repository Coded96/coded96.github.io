import { useEffect } from "react"
import PostComponent from "./Post"
import { Post } from "../../shared/entities/Post"
import { useAuth } from "../../shared/hooks/useAuth"
import { updatePostsList } from "./context/Action"

const PostList = () => {
    const { state, dispatch } = useAuth();

    useEffect(() => {
        const createPosts = () => {
            let ps = []
            for (let i = 0; i < 10; i++) {
                let p = new Post();
                p.id = i
                p.text = "Bienvenido a MAZ " + i
                p.user = state.loginState.user
                p.created = new Date()
                p.edited = new Date()
                p.like = 0
                ps.push(p)
            }
            dispatch(updatePostsList(ps))
        }
        if (state.loginState.user.username != undefined)
            createPosts()
    }, [state.loginState.user, state.postState.Posts])

    return (
        <section className="w-1/2 min-h-[75vh] mx-auto py-2 border-b-[1px] border-x-[1px] ">
            {state.postState.Posts.map((p: Post) => (<PostComponent key={p.id} data={p} />))}
        </section>
    )
}

export default PostList