import Navbar from "../components/Navbar"

function Login() {
    return (
        <>
        <Navbar />
        <form>
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