import People from "./People";
import Planets from "./Planets";
import Starships from "./Starships";
import Species from "./Species";
import Vehicles from "./Vehicles";

export default class Films {
    private title: string;
    private episode_id: number;
    private opening_crawl: string;
    private director: string;
    private producer: string;
    private release_date: Date;
    private characters: People[];
    private planets: Planets[];
    private starships: Starships[];
    private vehicles: Vehicles[];
    private species: Species[];
    private created: Date;
    private edited: Date;
    private url: string;


    public constructor(_title = "", _episode_id = 0, _opening_crawl = "", _director = "", _producer = "", _release_date = new Date(), _characters = [], _planets = [], _species = [],
        _vehicles = [], _starships = [], _created = new Date(), _edited = new Date(), _url = "") {
        this.title = _title;
        this.episode_id = _episode_id;
        this.opening_crawl = _opening_crawl;
        this.director = _director;
        this.producer = _producer;
        this.release_date = _release_date;
        this.characters = _characters;
        this.planets = _planets;
        this.species = _species;
        this.vehicles = _vehicles;
        this.starships = _starships;
        this.created = _created;
        this.edited = _edited;
        this.url = _url;
    }


    public getTitle(): string {
        return this.title;
    }
    public getEpisodeID(): number {
        return this.episode_id;
    }
    public getOpeningCrawl(): string {
        return this.opening_crawl;
    }
    public getDirector(): string {
        return this.director;
    }
    public getProducer(): string {
        return this.producer;
    }
    public getReleaseDate(): Date {
        return this.release_date;
    }
    public getCharacters(): People[] {
        return this.characters;
    }
    public getPlanets(): Planets[] {
        return this.planets;
    }
    public getSpecies(): Species[] {
        return this.species;
    }
    public getVehicles(): Vehicles[] {
        return this.vehicles;
    }
    public getStarships(): Starships[] {
        return this.starships;
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

    public static ToFilms = (data: any) => {
        let result = new Films();
        result.characters = data["characters"];
        result.created = data["created"];
        result.edited = data["edited"];
        result.director = data["director"];
        result.episode_id = data["episode_id"];
        result.opening_crawl = data["opening_crawl"];
        result.planets = data["planets"];
        result.producer = data["producer"];
        result.release_date = data["release_date"];
        result.species = data["species"];
        result.starships = data["starships"];
        result.title = data["title"];
        result.vehicles = data["vehicles"];
        result.url = data["url"];

        return result;
    }
}