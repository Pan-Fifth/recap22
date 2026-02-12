import { useState } from "react";

function Login() {
    const [formLogin, setFormLogin] = useState({
        username: "",
        password: ""
    })

    const inputStyle = "border p-0.5 px-2 border-gray-500 rounded-md";

    const hdlChange = (e) => {
        const { name, value } = e.target
        setFormLogin((prv) => ({ ...prv, [name]: value }))

    }

    return (
        <div className="min-h-screen bg-gray-50 flex justify-center items-center p-4">
            <form

                className="bg-white p-6 rounded-md w-full max-w-md flex flex-col"
            >
                <h2 className="text-center">Login</h2>
                <label htmlFor="">username:</label>
                <input
                    type="text"
                    className={inputStyle}
                    name="username"
                    placeholder="username"
                    onChange={hdlChange}
                    value={formLogin.username}

                ></input>

                <label htmlFor="" name="password">
                    password:
                </label>
                <input
                    type="password"
                    className={inputStyle}
                    name="password"
                    placeholder="password"
                    onChange={hdlChange}
                    value={formLogin.password}

                ></input>

                <button className="bg-amber-300 py-1 mt-3 rounded-2xl cursor-pointer hover:bg-rose-400 transition-all duration-150">
                    Login
                </button>
            </form>
        </div>
    )
}
export default Login