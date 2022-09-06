import { Routes, Route } from 'react-router-dom';

import AddRecordCardsPage from './pages/AddRecordCardsPage';
import RecordCardsOverviewPage from './pages/RecordCardsOverviewPage';
import RecordCardProvider from './store/RecordCardProvider';
import DemoComponent from './DemoComponent';

function App() {
  
  return (
    <RecordCardProvider>
      <Routes>
        <Route path="/" element={<RecordCardsOverviewPage />} />
        <Route path="/records-overview" element={<RecordCardsOverviewPage />} />
        <Route path="/add-records" element={<AddRecordCardsPage />} />
      </Routes>
      <DemoComponent />
    </RecordCardProvider>
  );
}

export default App;
