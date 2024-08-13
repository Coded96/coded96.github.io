import { Link } from "react-router-dom"
import { useAuth } from "../shared/hooks/useAuth"

export const NavMenu = () => {
    const { state, logout } = useAuth();

    return (
        <nav className="flex flex-row basis-6 border-gray-500 border-b-2 p-3 gap-10 justify-between">
            <section className="flex flex-row gap-10">
                <Link className="text-gray-400" to={'/'}>Inicio</Link>
            </section>
            <section>
                <button onClick={logout}>{state.user.username}</button>
            </section>
        </nav>
    )
}