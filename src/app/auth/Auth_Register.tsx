import { FormEvent, useState } from "react";
import { useAuth } from "../shared/hooks/useAuth";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";
import { User } from "../shared/entities/User";

export const AuthRegister = () => {
    const { login } = useAuth();
    const [registeredData, setRegisteredData] = useLocalStorage("usuarios", new User())

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")

    const [errores, setErrores] = useState<string[]>([])

    const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrores([])
        let err: string[] = []

        if (username == '' || password == '' || email == '')
            err.push("Los campos del formulario no pueden estar vacios")
        if (password !== confirmPassword)
            err.push("Las contraseñas no coinciden")

        if (password.length < 8)
            err.push("La contraseña debe tener más de 8 caracteres")


        let user = registeredData as User
        if (user.username == username || user.email == email)
            err.push("El usuario ya está en uso")

        // Here you would usually send a request to your backend to authenticate the user
        // For the sake of this example, we're using a mock authentication
        if (err.length == 0) {
            user.email = email;
            user.username = username;
            user.password = password;
            setRegisteredData(user)
            // Replace with actual authentication logic
            await login({ username, password, email });
        } else {
            setErrores(err)
        }
    };

    return (
        <form onSubmit={(e) => handleLogin(e)} className="flex flex-col basis-1/2">
            <section className="flex flex-col w-1/2 mx-auto my-2 gap-2">
                <input
                    className="text-gray-800 px-4 py-1 outline-none font-semibold border-2 bg-slate-300"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email" />
                <input
                    className="text-gray-800 px-4 py-1 outline-none font-semibold border-2 bg-slate-300"
                    placeholder="Login name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} />
                <input
                    className="text-gray-800 px-4 py-1 outline-none font-semibold border-2 bg-slate-300"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password" />
                <input
                    className="text-gray-800 px-4 py-1 outline-none font-semibold border-2 bg-slate-300"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password" />
            </section>
            <section className="mx-auto my-2">
                <button type="submit" className="text-gray-900 font-medium bg-cyan-400 px-3 py-2 hover:bg-gradient-to-b hover:from-cyan-400 hover:to-cyan-600">Register</button>
            </section>
            <section className="flex flex-col mx-auto my-5 text-red-600  w-1/2 ">
                {errores.map(m => (<span key={m}>{m}</span>))}
            </section>
        </form>
    )
}