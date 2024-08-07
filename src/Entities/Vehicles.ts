import Films from "./Films";
import People from "./People";

export default class Vehicles {
    private name: string;
    private model: string;
    private manufacturer: string;
    private cost_in_credits: number;
    private length: number;
    private max_atmosphering_speed: number;
    private crew: number;
    private passengers: number;
    private cargo_capacity: number;
    private consumables: string;
    private vehicle_class: string;
    private pilots: People[];
    private films: Films[];
    private created: Date;
    private edited: Date;
    private url: string;

    public constructor(_name: string = "", _model = "", _manufacturer = "", _cost_in_credits = 0, _length = 0, _max_atmosphering_speed = 0, _crew = 0, _passengers = 0, _cargo_capacity = 0, _consumables = "",
        _vehicle_class = "", _pilots = [], _films = [], _created = new Date(), _edited = new Date(), _url = "") {
        this.name = _name;
        this.model = _model;
        this.manufacturer = _manufacturer;
        this.cost_in_credits = _cost_in_credits;
        this.length = _length;
        this.max_atmosphering_speed = _max_atmosphering_speed;
        this.crew = _crew;
        this.passengers = _passengers;
        this.cargo_capacity = _cargo_capacity;
        this.consumables = _consumables;
        this.vehicle_class = _vehicle_class;
        this.pilots = _pilots;
        this.films = _films;
        this.created = _created;
        this.edited = _edited;
        this.url = _url;
    }


    public getName(): string {
        return this.name;
    }
    public getModel(): string {
        return this.model;
    }
    public getManufacturer(): string {
        return this.manufacturer;
    }
    public getCost(): number {
        return this.cost_in_credits;
    }
    public getLength(): number {
        return this.length;
    }
    public getMaxAtmosphereSpeed(): number {
        return this.max_atmosphering_speed;
    }
    public getCrew(): number {
        return this.crew;
    }
    public getPassangers(): number {
        return this.passengers;
    }
    public getCargoCapacity(): number {
        return this.cargo_capacity;
    }
    public getConsumables(): string {
        return this.consumables;
    }
    public getVehicleClass(): string {
        return this.vehicle_class;
    }
    public getPilots(): People[] {
        return this.pilots;
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

    public static ToVehicles = (data: any) => {
        let result = new Vehicles();
        result.created = data["created"];
        result.edited = data["edited"];
        result.url = data["url"];
        result.films = data["films"];
        result.name = data["name"];
        result.cargo_capacity = data["cargo_capacity"];
        result.consumables = data["consumables"];
        result.cost_in_credits = data["cost_in_credits"];
        result.crew = data["crew"];
        result.length = data["length"];
        result.manufacturer = data["manufacturer"];
        result.max_atmosphering_speed = data["max_atmosphering_speed"];
        result.model = data["model"];
        result.passengers = data["passengers"];
        result.pilots = data["pilots"];
        result.vehicle_class = data["vehicle_class"];

        return result;
    }
}