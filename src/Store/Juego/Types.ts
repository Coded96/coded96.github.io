

export enum JuegoTypes {
    form_name = "JuegoNAME",
}

export type JuegoAction =
    | { type: JuegoTypes.form_name; data: string }
    

