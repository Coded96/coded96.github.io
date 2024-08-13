import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../shared/hooks/useAuth";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { User } from "../shared/entities/User";

export const AuthLogin = () => {
    const { login, session } = useAuth();
    const [registeredData] = useLocalStorage("usuarios", new User())
    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [errores, setErrores] = useState<string[]>([])

    useEffect(() => {
        if (session)
            navigate('/')
    }, [])

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrores([])
        let err: string[] = []
        let usr: User = new User();
        usr.username = registeredData["username"]
        usr.password = registeredData["password"]
        usr.email = registeredData["email"]

        if (username == '' || password == '' || email == '')
            err.push("Los campos del formulario no pueden estar vacios")

        if (usr.username == '' || usr.email == '')
            err.push('No tenemos datos de tu registro. Por favor, registrese primero')

        if (usr.password != password || (usr.username != username && usr.email != email))
            err.push("Datos incorrectos")

        if (err.length == 0) {
            // registeredData.push(`${username}#${password}`)
            // setRegisteredData(registeredData)
            // Replace with actual authentication logic
            login({ username: usr.username, password: usr.password, email: usr.email });
        } else {
            setErrores(err)
        }
    };

    return (
        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col basis-1/2">
            <section className="flex flex-col w-1/2 mx-auto my-2 gap-2">
                <input
                    className="text-gray-800 px-4 py-1 outline-none font-semibold border-2 bg-slate-300"
                    placeholder="Name or email"
                    onChange={(e) => { setUsername(e.target.value); setEmail(e.target.value) }}
                    value={username} />
                <input
                    className="text-gray-800 px-4 py-1 outline-none font-semibold border-2 bg-slate-300"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password" />
            </section>
            <section className="mx-auto my-2">
                <button type="submit" className="text-gray-900 font-medium bg-cyan-400 px-3 py-2 hover:bg-gradient-to-b hover:from-cyan-400 hover:to-cyan-600">Login</button>
            </section>
            <section className="flex flex-col mx-auto my-5 text-red-600  w-1/2 ">
                {errores.map(m => (<span key={m}>{m}</span>))}
            </section>
        </form>
    )
}