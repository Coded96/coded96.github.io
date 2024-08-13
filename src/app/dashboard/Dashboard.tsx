import PostList from "./post/PostList";
import PostNew from "./post/PostNew";

export const Portada = () => {

    return (
        <section>
            <PostNew />
            <PostList />
        </section>
    )
}