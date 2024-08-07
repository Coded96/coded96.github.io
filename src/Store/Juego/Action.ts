import Films from "../../Entities/Films";
import People from "../../Entities/People";
import Planets from "../../Entities/Planets";
import Species from "../../Entities/Species";
import Starships from "../../Entities/Starships";
import Vehicles from "../../Entities/Vehicles";
import SWApi from "../../services/SWApi";
import { JuegoAction, JuegoTypes } from "./Types";

export const updateFormJuego = (data: string) => {
    return {
        type: JuegoTypes.form_name,
        data
    } as JuegoAction;
}

export const updateListPeople = async (page: number = 1) => {
    const resp = await SWApi.getInstance()?.getPeopleByPage(page)
        .then((resp: any) => {
            let count = Number(resp["count"]);

            const data: People[] = [];
            const listado: [] = resp["results"];

            listado.forEach(fe => data.push(People.ToPeople(fe)))

            return {
                plist: {
                    type: JuegoTypes.people_list,
                    data
                } as JuegoAction, ppages: {
                    type: JuegoTypes.people_pages,
                    data: Math.ceil(count / 10)
                } as JuegoAction
            }
        });

    return resp!;
}


export const updateListSpecies = (data: Species[]) => {
    return {
        type: JuegoTypes.species_list,
        data
    } as JuegoAction;
}

export const updateListPlanets = (data: Planets[]) => {
    return {
        type: JuegoTypes.planets_list,
        data
    } as JuegoAction;
}

export const updateListSpaceships = (data: Starships[]) => {
    return {
        type: JuegoTypes.spaceships_list,
        data
    } as JuegoAction;
}

export const updateListVehicles = (data: Vehicles[]) => {
    return {
        type: JuegoTypes.vehicles_list,
        data
    } as JuegoAction;
}

export const updateListFilms = (data: Films[]) => {
    return {
        type: JuegoTypes.films_list,
        data
    } as JuegoAction;
}

