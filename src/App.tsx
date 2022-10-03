import { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import AddRecordCards from "./pages/AddRecordCards";
import OverviewRecordCards from "./pages/OverviewRecordCards";
import Authentication from "./pages/Authentication/Authentication";
import Home from "./pages/Home/Home";

import { UserContext } from "./contexts/user-context";

const App = () => {
  const {isLoggedIn} = useContext(UserContext)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      {isLoggedIn && <Route path="/records-overview" element={<OverviewRecordCards />} />}
      {isLoggedIn &&<Route path="/add-records" element={<AddRecordCards />} />}
      {!isLoggedIn && <Route path="/authentication" element={<Authentication />} />}
    </Routes>
  );
};

export default App;
