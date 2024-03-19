
import { JuegoAction, JuegoTypes } from "./Types";


export interface IJuegoState {
    form_name: string;
}

export const initialState: IJuegoState = {
    form_name: "",
};

export default function JuegoReducer(state: IJuegoState, action: JuegoAction): IJuegoState {
    switch (action.type) {
        case JuegoTypes.form_name:
            return { ...state, form_name: action.data };
        default:
            return state;
    }
}