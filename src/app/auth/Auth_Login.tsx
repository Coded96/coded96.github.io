import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../shared/hooks/useAuth";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const AuthLogin = ({ handleLoginBtn }: { handleLoginBtn: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { login, session } = useAuth();
    const [registeredData] = useLocalStorage("usuarios", [])
    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [errores, setErrores] = useState<string[]>([])

    useEffect(() => {
        if (session)
            navigate('/')
    }, [])

    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrores([])
        let err: string[] = []

        if (username == '' || password == '')
            err.push("Los campos del formulario no pueden estar vacios")

        if (registeredData.length == 0)
            err.push('No tenemos datos de tu registro. Por favor, registrese primero')

        let coinciden = false;
        for (let i = 0; i < registeredData.length; i++) {
            let user = registeredData[0].split("#")[0]
            let pass = registeredData[0].split("#")[1]
            if (user == username && pass == password)
                coinciden = true;
        }
        if (!coinciden) err.push("Datos incorrectos")

        if (err.length == 0) {
            // registeredData.push(`${username}#${password}`)
            // setRegisteredData(registeredData)
            // Replace with actual authentication logic
            login({ username, password });
        } else {
            setErrores(err)
        }
    };

    return (
        <section>
            <form onSubmit={(e) => handleLogin(e)}>
                <section>
                    <div>Login</div>
                    <div onClick={() => handleLoginBtn(false)}>Register</div>
                </section>
                <section>
                    <input placeholder="Login name" onChange={(e) => setUsername(e.target.value)} value={username} className="text-gray-800" />
                    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className="text-gray-800" type="password" />
                </section>
                <section>
                    <button type="submit" className="text-gray-900">Login</button>
                </section>
                <section className="flex flex-col gap-3">
                    {errores.map(m => (<span key={m}>{m}</span>))}
                </section>
            </form>
        </section>
    )
}