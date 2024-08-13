import { useAuth } from "../shared/hooks/useAuth"

export const Portada = () => {
    const { logout, state } = useAuth();

    const handleLogout = () => {
        logout()
    }

    return (
        <section>
            <div>hola</div>
            <button onClick={handleLogout} className="text-gray-900">y adiós</button>

            <div>user: {state.user.username}</div>
        </section>
    )
}