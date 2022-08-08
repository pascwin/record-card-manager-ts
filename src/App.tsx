import { Routes, Route } from 'react-router-dom';
import AddRecordCardsPage from './pages/AddRecordCardsPage';

import RecordCardsOverviewPage from './pages/RecordCardsOverviewPage';
import RecordCardProvider from './store/RecordCardProvider';

function App() {
  
  return (
    <RecordCardProvider>
      <Routes>
        <Route path="/" element={<RecordCardsOverviewPage />} />
        <Route path="/records-overview" element={<RecordCardsOverviewPage />} />
        <Route path="/add-records" element={<AddRecordCardsPage />} />
      </Routes>
    </RecordCardProvider>
  );
}

export default App;
