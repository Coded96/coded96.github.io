import { FormEvent, useState } from "react";
import { useAuth } from "../shared/hooks/useAuth";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";

export const AuthRegister = ({ handleLoginBtn }: { handleLoginBtn: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const { login } = useAuth();
    const [registeredData, setRegisteredData] = useLocalStorage("usuarios", [])

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [errores, setErrores] = useState<string[]>([])

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrores([])
        let err: string[] = []

        if (username == '' || password == '')
            err.push("Los campos del formulario no pueden estar vacios")
        if (password !== confirmPassword)
            err.push("Las contraseñas no coinciden")

        if (password.length < 8)
            err.push("La contraseña debe tener más de 8 caracteres")

        for (let i = 0; i < registeredData.length; i++) {
            let user = registeredData[0].split("#")[0]
            if (user == username)
                err.push("El usuario ya está en uso")
        }

        // Here you would usually send a request to your backend to authenticate the user
        // For the sake of this example, we're using a mock authentication
        if (err.length == 0) {
            registeredData.push(`${username}#${password}`)
            setRegisteredData(registeredData)
            // Replace with actual authentication logic
            await login({ username, password });
        } else {
            setErrores(err)
        }
    };

    return (
        <section>
            <form onSubmit={(e) => handleLogin(e)}>
                <section>
                    <div onClick={() => handleLoginBtn(true)}>Login</div>
                    <div>Register</div>
                </section>
                <section>
                    <input placeholder="Login name" onChange={(e) => setUsername(e.target.value)} value={username} className="text-gray-800" />
                    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} className="text-gray-800" type="password" />
                    <input placeholder="Confirm password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} className="text-gray-800" type="password" />
                </section>
                <section>
                    <button type="submit" className="text-gray-900">Register</button>
                </section>
                <section className="flex flex-col">
                    {errores.map(m => (<span key={m}>{m}</span>))}
                </section>
            </form>
        </section>
    )
}