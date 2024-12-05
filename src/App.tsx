import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import reactLogo from './assets/react.svg';
import AnalyticsPage from './pages/AnalyticsPage';
import DashboardPage from './pages/DashboardPage';
import FoodMenuPage from './pages/FoodMenuPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/foodmenu" element={<FoodMenuPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Router>
  );
}

function LandingPage() {
  return (
    <div>
      <header>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Welcome to the App</h1>
      </header>
      <nav>
        <ul>
          <li><Link to="/analytics">Go to Analytics</Link></li>
          <li><Link to="/dashboard">Go to Dashboard</Link></li>
          <li><Link to="/foodmenu">Go to Food Menu</Link></li>
          <li><Link to="/user">Go to User</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;