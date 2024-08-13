import { useAuth } from "../shared/hooks/useAuth"
import PostList from "./post/PostList";

export const Portada = () => {
    const { state } = useAuth();


    return (
        <section>
            <div>hola</div>

            <div>user: {state.loginState.user.username}</div>
            <div>email: {state.loginState.user.email}</div>

            <PostList />
        </section>
    )
}