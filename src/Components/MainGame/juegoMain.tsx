import { useEffect, useReducer, useState } from "react";
import PeopleCard from "../Cards/PeopleCard";
import JuegoReducer, { initialState } from "../../Store/Juego/Reducer";
import { updateListPeople } from "../../Store/Juego/Action";

const JuegoMain = () => {
    const [state, dispatch] = useReducer(JuegoReducer, initialState);
    const [paginasPeople, setPaginasPeople] = useState<JSX.Element[]>([])

    const handlePeopleList = async (page: number = 1) => {
        let results = await updateListPeople(page);
        dispatch(results.plist);
        dispatch(results.ppages);
    }

    useEffect(() => {
        handlePeopleList();


        if (state.people_pages > 1) {
            let paginator = [];
            for (let index = 1; index <= state.people_pages; index++) {
                paginator.push(<li className="paginaPeople" onClick={() => handlePeopleList(index)}>{index}</li>)
            }
            setPaginasPeople(paginator);
        }
    }, [state.people_pages])

    return (
        <section>
            <section className="paginacionSection">
                {paginasPeople.length > 0 && (<ul className="paginacion">{paginasPeople.map(m => m)}</ul>)}
            </section>
            <section className="contentBody">
                {state.people_list.map(m => (<PeopleCard _people={m} key={m.getName()} />))}
            </section>
        </section>)
}

export default JuegoMain;