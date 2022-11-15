import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import styles from "./Login.module.css"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { login, error, isPending } = useLogin()

    const emailInputHandler = (event: any) => {
        setEmail(event.target.value)
    }

    const passwordInputHandler = (event: any) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        login(email, password)
    }

    return (
        <form onSubmit={handleSubmit} className={styles["login-form"]}>
            <h2>Login</h2>
            <label>
                <span>email:</span>
                <input type="email" onChange={emailInputHandler} value={email} />
            </label>
            <label>
                <span>password:</span>
                <input type="password" onChange={passwordInputHandler} value={password} />
            </label>
            {!isPending && <button className="btn">Login</button>}
            {error && <p>{error}</p>}
            {isPending && <button className="btn" disabled>loading</button>}
        </form>
    )
}

export default Login;