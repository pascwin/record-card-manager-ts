import { useAuthContext } from "./hooks/useAuthContext";
import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//components
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Category from "./pages/category/Category/Category";

// import { UserContext } from "./contexts/user-context";

const App = () => {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <Fragment>
          <Navbar />
          <Layout>
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/home"
                element={user ? <Home /> : <Navigate to="/login" />}
              />
              <Route
                path="/category/:category"
                element={user ? <Category /> : <Navigate to="/login" />}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/home" />}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/home" />}
              />
            </Routes>
          </Layout>
        </Fragment>
      )}
    </div>
  );
};

export default App;
