import { User } from "./User";

export class Post {
    private _id!: number;
    private _user!: User;
    private _created!: Date;
    private _edited!: Date;
    private _text!: string;
    private _like!: number;


    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get user(): User {
        return this._user;
    }
    public set user(value: User) {
        this._user = value;
    }
    public get created(): Date {
        return this._created;
    }
    public set created(value: Date) {
        this._created = value;
    }
    public get edited(): Date {
        return this._edited;
    }
    public set edited(value: Date) {
        this._edited = value;
    }
    public get text(): string {
        return this._text;
    }
    public set text(value: string) {
        this._text = value;
    }
    public get like(): number {
        return this._like;
    }
    public set like(value: number) {
        this._like = value;
    }
}