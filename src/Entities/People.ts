import Films from "./Films";
import Planets from "./Planets";
import Starships from "./Starships";
import Species from "./Species";
import Vehicles from "./Vehicles";

export default class People {
    private name: string;
    private height: number; //cm
    private mass: number; //kg
    private hair_color: string;
    private skin_color: string;
    private eye_color: string;
    private birth_year: string;
    private gender: string;
    private homeworld: string;
    private films: string[];
    private species: string;
    private vehicles: string[];
    private starships: string[];
    private created: Date;
    private edited: Date;
    private url: string;

    public constructor(_name: string = "", _height = 0, _mass = 0, _hair_color = "", _skin_color = "", _eye_color = "", _birth_year = "", _gender = "", _homeworld = "", _films = [], _species = "",
        _vehicles = [], _starships = [], _created = new Date(), _edited = new Date(), _url = "") {
        this.name = _name;
        this.height = _height;
        this.mass = _mass;
        this.hair_color = _hair_color;
        this.skin_color = _skin_color;
        this.eye_color = _eye_color;
        this.birth_year = _birth_year;
        this.gender = _gender;
        this.homeworld = _homeworld;
        this.films = _films;
        this.species = _species;
        this.vehicles = _vehicles;
        this.starships = _starships;
        this.created = _created;
        this.edited = _edited;
        this.url = _url;
    }


    public getName(): string {
        return this.name;
    }
    public getHeight(): number {
        return this.height;
    }
    public getMass(): number {
        return this.mass;
    }
    public getHairColor(): string {
        return this.hair_color;
    }
    public getSkinColor(): string {
        return this.skin_color;
    }
    public getEyeColor(): string {
        return this.eye_color;
    }
    public getBirthYear(): string {
        return this.birth_year;
    }
    public getGender(): string {
        return this.gender;
    }
    public getHomeworld(): Promise<Planets> {
        return fetch(this.homeworld)
            .then((t) => t.json())
            .then((resp) => {
                return Planets.ToPlanets(resp);
            })
    }
    public getFilms(): Films[] {
        const films: Films[] = [];
        this.films.forEach(fe => {
            fetch(fe)
                .then((t) => t.json())
                .then((resp) => {
                    films.push(Films.ToFilms(resp))
                })
        })
        return films;
    }
    public getSpecies(): Promise<Species> {
        return fetch(this.species)
            .then((t) => t.json())
            .then((resp) => {
                return Species.ToSpecies(resp);
            })
    }
    public getVehicles(): Vehicles[] {
        const vehicles: Vehicles[] = [];
        this.vehicles.forEach(fe => {
            fetch(fe)
                .then((t) => t.json())
                .then((resp) => {
                    vehicles.push(Vehicles.ToVehicles(resp))
                })
        })
        return vehicles;
    }
    public getStarships(): Starships[] {
        const spaceships: Starships[] = [];
        this.starships.forEach(fe => {
            fetch(fe)
                .then((t) => t.json())
                .then((resp) => {
                    spaceships.push(Starships.ToSpaceships(resp))
                })
        })
        return spaceships;
    }
    public getCreated(): Date {
        return this.created;
    }
    public getEdited(): Date {
        return this.edited;
    }
    public getUrl(): string {
        return this.url;
    }

    public static ToPeople = (data: any) => {
        let result = new People();
        result.birth_year = data["birth_year"];
        result.created = data["created"];
        result.edited = data["edited"];
        result.eye_color = data["eye_color"];
        result.films = data["films"];
        result.gender = data["gender"];
        result.hair_color = data["hair_color"];
        result.height = data["height"];
        result.mass = data["mass"];
        result.homeworld = data["homeworld"];
        result.name = data["name"];
        result.skin_color = data["skin_color"];
        result.species = data["species"];
        result.starships = data["starships"];
        result.url = data["url"];
        result.vehicles = data["vehicles"];

        return result;
    }
}