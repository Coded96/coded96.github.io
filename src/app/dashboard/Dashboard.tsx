import { useAuth } from "../shared/hooks/useAuth"

export const Portada = () => {
    const { logout, state } = useAuth();

    const handleLogout = () => {
        logout()
    }

    return (
        <section>
            <div>hola</div>
            <button onClick={handleLogout} >y adiós</button>

            <div>user: {state.user.username}</div>
            <div>email: {state.user.email}</div>
        </section>
    )
}