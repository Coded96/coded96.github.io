import { useEffect, useState } from "react";
import People from "../../Entities/People"
import Planets from "../../Entities/Planets";
import Starships from "../../Entities/Starships";
import Vehicles from "../../Entities/Vehicles";
import Films from "../../Entities/Films";
import Species from "../../Entities/Species";

const PeopleCard = ({ _people }: { _people: People }) => {
    const [planet, setPlanet] = useState<Planets>()
    const [starships, setStarships] = useState<Starships[]>()
    const [vehicles, setVehicles] = useState<Vehicles[]>()
    const [films, setFilms] = useState<Films[]>()
    const [species, setSpecies] = useState<Species>()

    useEffect(() => {
        const setHomeWorld = () => {
            _people.getHomeworld()
                .then(t => {
                    setPlanet(t)
                })
        }
        const setSpecie = () => {
            _people.getSpecies()
                .then(t => {
                    setSpecies(t)
                })
        }
        const setStarship = () => {
            setStarships(_people.getStarships())
        }
        const setVehicle = () => {
            setVehicles(_people.getVehicles())
        }
        const setFilm = () => {
            setFilms(_people.getFilms())
        }

        setHomeWorld()
        setSpecie()
        setStarship()
        setVehicle()
        setFilm()
    }, [])

    return (
        <section className="card" key={_people.getName() + "card"}>
            <div className="cardHeader">
                <h3>{_people.getName()}</h3>
            </div>
            <div className="cardBody">
                <span>Nacimiento: {_people.getBirthYear()}</span>
                <span>Género: {_people.getGender()}</span>
                {species?.getName() && (<span>Raza: {species?.getName()}</span>)}
                <span>Ojos: {_people.getEyeColor()}</span>
                <span>Pelo: {_people.getHairColor()}</span>
                <span>Altura: {_people.getHeight()}</span>
                <span>Color: {_people.getSkinColor()}</span>
                {planet?.getName() && <span>Planeta de origen: {planet?.getName()}</span>}
                {vehicles != undefined && vehicles.length > 0 && <span>Vehiculos a su nombre: {vehicles?.map(m => m.getName()).join(', ')}</span>}
                {starships != undefined && starships.length > 0 && <span>Naves pilotadas: {starships?.map(m => m.getName()).join(', ')}</span>}
                {films != undefined && films.length > 0 && <span>Peliculas: {films?.map(m => m.getTitle()).join(', ')}</span>}
            </div>
        </section>)
}


export default PeopleCard;