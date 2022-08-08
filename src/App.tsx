import { Routes, Route } from 'react-router-dom';
import AddRecordCardsPage from './pages/AddRecordCardsPage';

import RecordCardsOverviewPage from './pages/RecordCardsOverviewPage';

function App() {


  return (
    <Routes>
      <Route path="/" element={<RecordCardsOverviewPage />} />
      <Route path="/records-overview" element={<RecordCardsOverviewPage />} />
      <Route path="/add-records" element={<AddRecordCardsPage />} />
    </Routes>
  );
}

export default App;
