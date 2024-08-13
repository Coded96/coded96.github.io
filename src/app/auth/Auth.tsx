import { useState } from "react"
import { AuthLogin } from "./Auth_Login"
import { AuthRegister } from "./Auth_Register"

export const MenuLogin = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <section className="bg-slate-700 w-1/3 m-auto mt-5  shadow-xl rounded-lg overflow-hidden">
            <section className="flex flex-row gap-10 justify-center p-2 text-stone-200 ">
                <button className={`${isLogin && ('text-blue-400')} font-medium border-b-2 border-transparent hover:text-blue-400 hover:border-blue-400 hover:border-b-2`} onClick={() => setIsLogin(true)}>Login</button>
                <button className={`${!isLogin && ('text-blue-400')} font-medium border-b-2 border-transparent hover:text-blue-400 hover:border-blue-400 hover:border-b-2 `} onClick={() => setIsLogin(false)}>Register</button>
            </section>
            {isLogin ?
                (<AuthLogin />) :
                (<AuthRegister />)}
        </section>
    )
}