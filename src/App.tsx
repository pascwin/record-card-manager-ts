import { Routes, Route } from "react-router-dom";

import AddRecordCards from "./pages/AddRecordCards";
import OverviewRecordCards from "./pages/OverviewRecordCards";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<OverviewRecordCards />} />
        <Route path="/records-overview" element={<OverviewRecordCards />} />
        <Route path="/add-records" element={<AddRecordCards />} />
      </Routes>
  );
};

export default App;
