import Films from "../../Entities/Films";
import People from "../../Entities/People";
import Planets from "../../Entities/Planets";
import Species from "../../Entities/Species";
import Starships from "../../Entities/Starships";
import Vehicles from "../../Entities/Vehicles";


export enum JuegoTypes {
    form_name = "JuegoNAME",
    people_list = "people_list",
    people_pages = "people_pages",
    species_list = "species_list",
    species_pages = "people_pages",
    planets_list = "planets_list",
    planets_pages = "people_pages",
    spaceships_list = "spaceships_list",
    spaceships_pages = "people_pages",
    vehicles_list = "vehicles_list",
    vehicles_pages = "people_pages",
    films_list = "films_list",
    films_pages = "people_pages",
}

export type JuegoAction =
    { type: JuegoTypes.form_name; data: string }
    | { type: JuegoTypes.people_list; data: People[] }
    | { type: JuegoTypes.people_pages; data: number }
    | { type: JuegoTypes.species_list; data: Species[] }
    | { type: JuegoTypes.species_pages; data: number }
    | { type: JuegoTypes.planets_list; data: Planets[] }
    | { type: JuegoTypes.planets_pages; data: number }
    | { type: JuegoTypes.spaceships_list; data: Starships[] }
    | { type: JuegoTypes.spaceships_pages; data: number }
    | { type: JuegoTypes.vehicles_list; data: Vehicles[] }
    | { type: JuegoTypes.vehicles_pages; data: number }
    | { type: JuegoTypes.films_list; data: Films[] }
    | { type: JuegoTypes.films_pages; data: number }


