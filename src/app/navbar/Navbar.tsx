import { Link } from "react-router-dom"

export const NavMenu = () => {
    return (
        <section>
            <nav>
                <ul>
                    <li><Link to={'/'}>Inicio</Link></li>
                    <li><Link to={'/Login'}>Login</Link></li>
                </ul>
            </nav>
        </section>
    )
}