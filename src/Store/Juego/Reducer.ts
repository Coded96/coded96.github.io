
import Films from "../../Entities/Films";
import People from "../../Entities/People";
import Planets from "../../Entities/Planets";
import Species from "../../Entities/Species";
import Starships from "../../Entities/Starships";
import Vehicles from "../../Entities/Vehicles";
import { JuegoAction, JuegoTypes } from "./Types";


export interface IJuegoState {
    form_name: string;
    people_list: People[];
    people_pages: number;
    species_list: Species[];
    species_pages: number;
    planets_list: Planets[];
    planets_pages: number;
    spaceships_list: Starships[];
    spaceships_pages: number;
    vehicles_list: Vehicles[];
    vehicles_pages: number;
    films_list: Films[];
    films_pages: number;
}

export const initialState: IJuegoState = {
    form_name: "",
    people_list: [],
    species_list: [],
    planets_list: [],
    spaceships_list: [],
    vehicles_list: [],
    films_list: [],
    people_pages: 1,
    species_pages: 1,
    planets_pages: 1,
    spaceships_pages: 1,
    vehicles_pages: 1,
    films_pages: 1
};

export default function JuegoReducer(state: IJuegoState, action: JuegoAction): IJuegoState {
    switch (action.type) {
        case JuegoTypes.form_name:
            return { ...state, form_name: action.data };
        case JuegoTypes.people_list:
            return { ...state, people_list: action.data };
        case JuegoTypes.species_list:
            return { ...state, species_list: action.data };
        case JuegoTypes.planets_list:
            return { ...state, planets_list: action.data };
        case JuegoTypes.spaceships_list:
            return { ...state, spaceships_list: action.data };
        case JuegoTypes.vehicles_list:
            return { ...state, vehicles_list: action.data };
        case JuegoTypes.films_list:
            return { ...state, films_list: action.data };
        case JuegoTypes.people_pages:
            return { ...state, people_pages: action.data };
        case JuegoTypes.species_pages:
            return { ...state, species_pages: action.data };
        case JuegoTypes.planets_pages:
            return { ...state, planets_pages: action.data };
        case JuegoTypes.spaceships_pages:
            return { ...state, spaceships_pages: action.data };
        case JuegoTypes.vehicles_pages:
            return { ...state, vehicles_pages: action.data };
        case JuegoTypes.films_pages:
            return { ...state, films_pages: action.data };
        default:
            return state;
    }
}