import { useEffect, useState } from "react"
import PostComponent from "./Post"
import { Post } from "../../shared/entities/Post"
import { useAuth } from "../../shared/hooks/useAuth"

const PostList = () => {
    const { state } = useAuth();
    const [posts, setPosts] = useState<Post[]>([])

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
            setPosts(ps)
        }
        createPosts()
    }, [])


    return (
        <section>
            {posts.map((p: Post) => (<PostComponent key={p.id} data={p} />))}
        </section>
    )
}

export default PostList