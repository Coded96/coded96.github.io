import { JuegoAction, JuegoTypes } from "./Types";

export const updateFormJuego = (data: string) => {
    return {
        type: JuegoTypes.form_name,
        data
    } as JuegoAction;
}
