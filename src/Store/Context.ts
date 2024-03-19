import React, { Dispatch } from "react";
import { IJuegoState } from "./Juego/Reducer";
import { JuegoAction } from "./Juego/Types";

interface IContextProps {
    state: IJuegoState;
    dispatch: Dispatch<JuegoAction>;
}

const MainContext = React.createContext({} as IContextProps);

export const useMainContext = () => React.useContext(MainContext);

export default MainContext;