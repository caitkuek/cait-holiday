// import { handle } from "express/lib/application";
import Navbar from "../components/Navbar"

function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const info = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value,
        }
        console.log(info)

        fetch('api/login/', { 
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info), 
        })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    return (
        <>
        <Navbar />
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Login</legend>
                <label htmlFor="username">Username</label>
                <input name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input name="password" id="password" />
                <button>Login</button>
            </fieldset>
        </form>
        </>
    )
}

export default Login