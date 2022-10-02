import { Routes, Route } from 'react-router-dom';

import RecordCardProvider from './contexts/RecordCardProvider';
import DemoComponent from './DemoComponent';
import AddRecordCards from './pages/AddRecordCards';
import OverviewRecordCards from './pages/OverviewRecordCards';


function App() {
  
  return (
    <RecordCardProvider>
      <Routes>
        <Route path="/" element={<OverviewRecordCards />} />
        <Route path="/records-overview" element={<OverviewRecordCards />} />
        <Route path="/add-records" element={<AddRecordCards />} />
      </Routes>
      <DemoComponent />
    </RecordCardProvider>
  );
}

export default App;
