import Films from "./Films";
import People from "./People";

export default class Planets {
    private name: string;
    private rotation_period: number;
    private orbital_period: number;
    private diameter: number;
    private climate: string;
    private gravity: string;
    private terrain: string;
    private surface_water: string;
    private population: number;
    private residents: People[];
    private films: Films[];
    private created: Date;
    private edited: Date;
    private url: string;

    public constructor(_name: string = "", _rotation_period = 0, _orbital_period = 0, _diameter = 0, _climate = "", _gravity = "", _terrain = "", _surface_water = "", _population = 0, _residents = [],
        _films = [], _created = new Date(), _edited = new Date(), _url = "") {
        this.name = _name;
        this.rotation_period = _rotation_period;
        this.orbital_period = _orbital_period;
        this.diameter = _diameter;
        this.climate = _climate;
        this.gravity = _gravity;
        this.terrain = _terrain;
        this.surface_water = _surface_water;
        this.population = _population;
        this.residents = _residents;
        this.films = _films;
        this.created = _created;
        this.edited = _edited;
        this.url = _url;
    }


    public getName(): string {
        return this.name;
    }
    public getRotationPeriod(): number {
        return this.rotation_period;
    }
    public getOrbitalPeriod(): number {
        return this.orbital_period;
    }
    public getDiameter(): number {
        return this.diameter;
    }
    public getClimate(): string {
        return this.climate;
    }
    public getGravity(): string {
        return this.gravity;
    }
    public getTerrain(): string {
        return this.terrain;
    }
    public getSurfaceWater(): string {
        return this.surface_water;
    }
    public getPopulation(): number {
        return this.population;
    }
    public getResidents(): People[] {
        return this.residents;
    }
    public getFilms(): Films[] {
        return this.films;
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

    public static ToPlanets = (data: any) => {
        let result = new Planets();
        result.climate = data["climate"];
        result.created = data["created"];
        result.edited = data["edited"];
        result.diameter = data["diameter"];
        result.films = data["films"];
        result.gravity = data["gravity"];
        result.orbital_period = data["orbital_period"];
        result.population = data["population"];
        result.residents = data["residents"];
        result.rotation_period = data["rotation_period"];
        result.name = data["name"];
        result.surface_water = data["surface_water"];
        result.terrain = data["terrain"];
        result.url = data["url"];

        return result;
    }
}