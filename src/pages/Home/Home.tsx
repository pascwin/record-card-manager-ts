import {useContext } from "react"
import { UserContext } from "../../contexts/user-context";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./Home.scss"


const Home = () => {
    const {isLoggedIn} = useContext(UserContext)
    return (
        <Layout>
            <div className="home-container">
                <h1>Record Card Manager</h1>
                {!isLoggedIn && <Link to="/authentication"><button>Sign in!</button></Link>}
            </div>
        </Layout>
    )
}

export default Home;