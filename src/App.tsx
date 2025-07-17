import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Principal } from './screens/Principal';
import Dashboard from './screens/Dashboard/Dashboard';
import NotFound from './screens/NotFound/NotFound';

export default function App() {
  return (
    <BrowserRouter basename="/meredith">
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> {/* ← rota fallback */}
      </Routes>
    </BrowserRouter>
  );
}
