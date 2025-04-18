import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccountingNavbar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Transactions from './pages/Transactions';
import Persons from './pages/Persons';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <AccountingNavbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/persons" element={<Persons />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;