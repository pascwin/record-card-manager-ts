import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"
import styles from "./Signup.module.css"

const Signup = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { signup, isPending, error } = useSignup()

    const nameInputHandler = (event: any) => {
        setDisplayName(event.target.value)
    }

    const emailInputHandler = (event: any) => {
        setEmail(event.target.value)
    }

    const passwordInputHandler = (event: any) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        signup(email, password, displayName)
    }

    return (
        <form onSubmit={handleSubmit} className={styles["signup-form"]}>
            <h2>Signup</h2>
            <label>
                <span>name:</span>
                <input type="text" onChange={nameInputHandler} value={displayName} />
            </label>
            <label>
                <span>email:</span>
                <input type="email" onChange={emailInputHandler} value={email} />
            </label>
            <label>
                <span>password:</span>
                <input type="password" onChange={passwordInputHandler} value={password} />
            </label>
            {!isPending && <button className="btn">Signup</button>}
            {isPending && <button className="btn" disabled>loading</button>}
            {error && <p>{error}</p>}
        </form>
    )
}

export default Signup;