import { Link } from "react-router-dom";

const MenuMain = () => {

    return (
        <section className="max-">
            <div>
                <Link to={'/Juego'}>Jugar</Link>
            </div>
            <div>
                <Link to={'/Juego'}>Guardar</Link>
            </div>
        </section>)
}

export default MenuMain;