import Planets from "../Entities/Planets";

export default class SWApi {
    private static _instance: SWApi | null = new SWApi();

    private static URL_PEOPLE: string = "https://swapi.dev/api/people/?page=";
    private static URL_SPECIES: string = "https://swapi.dev/api/species/?page=";
    private static URL_PLANETS: string = "https://swapi.dev/api/planets/?page=";
    private static URL_SPACESHIPS: string = "https://swapi.dev/api/starships/?page=";
    private static URL_VEHICLES: string = "https://swapi.dev/api/vehicles/?page=";
    private static URL_FILMS: string = "https://swapi.dev/api/films/?page=";

    constructor() {
        if (SWApi._instance)
            throw new Error("Utiliza GetInstance() en su lugar");
        else
            SWApi._instance = this;
    }

    public static getInstance() {
        return SWApi._instance;
    }

    getPeopleByPage = (page: number = 1) => {
        return fetch(SWApi.URL_PEOPLE + page)
            .then(r => r.json())
            .then((resp) => {
                return resp;
            })
    }
    getPeopleByUrl = (url: string) => {
        return fetch(url)
            .then(r => r.json())
            .then((resp) => {
                return resp;
            })
    }

    getSpeciesByPage = (page: number = 1) => {
        fetch(SWApi.URL_SPECIES + page, {

        })
            .then(r => r.json())
            .then((resp) => {
                console.log(resp);
            })
    }

    getPlanetsByPage = (page: number = 1) => {
        fetch(SWApi.URL_PLANETS + page, {

        })
            .then(r => r.json())
            .then((resp) => {
                console.log(resp);
            })
    }
    getPlanetByUrl = (url: string): Promise<Planets> => {
        return fetch(url)
            .then(r => r.json())
            .then((resp) => {
                return resp;
            })
    }

    getSpaceshipsByPage = (page: number = 1) => {
        fetch(SWApi.URL_SPACESHIPS + page, {

        })
            .then(r => r.json())
            .then((resp) => {
                console.log(resp);
            })
    }

    getVehiclesByPage = (page: number = 1) => {
        fetch(SWApi.URL_VEHICLES + page, {

        })
            .then(r => r.json())
            .then((resp) => {
                console.log(resp);
            })
    }

    getFilmsByPage = (page: number = 1) => {
        fetch(SWApi.URL_FILMS + page, {

        })
            .then(r => r.json())
            .then((resp) => {
                console.log(resp);
            })
    }
}