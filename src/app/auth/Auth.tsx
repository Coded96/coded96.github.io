import { useState } from "react"
import { AuthLogin } from "./Auth_Login"
import { AuthRegister } from "./Auth_Register"

export const MenuLogin = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <section>
            {isLogin ?
                (<AuthLogin handleLoginBtn={setIsLogin} />) :
                (<AuthRegister handleLoginBtn={setIsLogin} />)}
        </section>
    )
}