import Films from "./Films";
import People from "./People";
import Planets from "./Planets";

export default class Species {
    private name: string;
    private hair_color: string;
    private skin_color: string;
    private eye_color: string;
    private average_height: number;
    private classification: string;
    private designation: string;
    private average_lifespan: number;
    private language: string;
    private people: People[];
    private homeworld: Planets | null;
    private films: Films[];
    private created: Date;
    private edited: Date;
    private url: string;


    public constructor(_name: string = "", _average_height = 0, _hair_color = "", _skin_color = "", _eye_color = "", _classification = "", _designation = "", _average_lifespan = 0, _language = "", _people = [],
        _homeworld = null, _films = [], _created = new Date(), _edited = new Date(), _url = "") {
        this.name = _name;
        this.hair_color = _hair_color;
        this.skin_color = _skin_color;
        this.eye_color = _eye_color;
        this.homeworld = _homeworld;
        this.average_height = _average_height;
        this.classification = _classification;
        this.designation = _designation;
        this.average_lifespan = _average_lifespan;
        this.language = _language;
        this.people = _people;
        this.films = _films;
        this.created = _created;
        this.edited = _edited;
        this.url = _url;
    }


    public getName(): string {
        return this.name;
    }
    public getHeight(): number {
        return this.average_height;
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
    public getHomeworld(): Planets | null {
        return this.homeworld;
    }
    public getClassification(): string {
        return this.classification;
    }
    public getDesignation(): string {
        return this.designation;
    }
    public getAverage_lifespan(): number {
        return this.average_lifespan;
    }
    public getLanguage(): string {
        return this.language
    }
    public getPeople(): People[] {
        return this.people;
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

    public static ToSpecies = (data: any) => {
        let result = new Species();
        result.created = data["created"];
        result.edited = data["edited"];
        result.films = data["films"];
        result.name = data["name"];
        result.url = data["url"];
        result.average_height = data["average_height"];
        result.average_lifespan = data["average_lifespan"];
        result.classification = data["classification"];
        result.designation = data["designation"];
        result.eye_color = data["eye_color"];
        result.hair_color = data["hair_color"];
        result.homeworld = data["homeworld"];
        result.language = data["language"];
        result.people = data["people"];
        result.skin_color = data["skin_color"];

        return result;
    }
}