import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Principal } from './screens/Principal';
import Dashboard from './screens/Dashboard/Dashboard';

export default function App() {
  return (
    <BrowserRouter basename="/meredith">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}