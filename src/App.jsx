import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { FaThLarge, FaMapMarkedAlt, FaCalendarPlus, FaHistory, FaUserTie, FaSun, FaMoon, FaExchangeAlt, FaBell, FaSignOutAlt, FaBolt } from 'react-icons/fa';
import { userProfile } from './data';
 
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FindStation from './pages/FindStation';
import Booking from './pages/Booking';
import History from './pages/History';
import OwnerDashboard from './pages/OwnerDashboard';
 
function Layout({ children, theme, setTheme, dir, setDir }) {
  const location = useLocation();
  if (location.pathname === '/') return <>{children}</>;
 
  return (
    <div className="d-flex">
      <aside className="sidebar p-3 d-none d-md-flex">
        <div className="brand mb-4 px-2 text-white d-flex align-items-center gap-2">
          <FaBolt className="text-primary" size={20} />
          <span className="fw-bold fs-5">VoltSpot</span>
        </div>
        
        <div className="sidebar-scroll d-flex flex-column">
          <small className="text-secondary fw-bold mt-2 mb-2 px-2" style={{fontSize: '11px', letterSpacing: '1px'}}>OVERVIEW</small>
          <NavLink to="/dashboard" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaThLarge /> Dashboard</NavLink>
          
          <small className="text-secondary fw-bold mt-4 mb-2 px-2" style={{fontSize: '11px', letterSpacing: '1px'}}>CHARGING</small>
          <NavLink to="/find" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaMapMarkedAlt /> Find Station</NavLink>
          <NavLink to="/booking" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaCalendarPlus /> Book Slot</NavLink>
          <NavLink to="/history" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaHistory /> History</NavLink>
 
          <small className="text-secondary fw-bold mt-4 mb-2 px-2" style={{fontSize: '11px', letterSpacing: '1px'}}>BUSINESS</small>
          <NavLink to="/owner" className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}><FaUserTie /> Owner Panel</NavLink>
        </div>
        
        <div className="mt-3 pt-3 border-top border-secondary">
          <div className="d-flex align-items-center gap-3 px-2 mb-3">
             <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style={{width: '35px', height: '35px'}}>{userProfile.name.charAt(0)}</div>
             <div>
                <h6 className="text-white mb-0" style={{fontSize: '14px'}}>{userProfile.name}</h6>
                <small className="text-secondary" style={{fontSize: '11px'}}>{userProfile.role}</small>
             </div>
          </div>
          <NavLink to="/" className="side-link text-danger fw-semibold"><FaSignOutAlt /> Logout</NavLink>
        </div>
      </aside>
 
      <div className="flex-grow-1 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <header className="topbar d-flex justify-content-between align-items-center px-4 py-3">
          <h6 className="mb-0 fw-bold d-none d-md-block">{userProfile.vehicle}</h6>
          
          <div className="d-flex gap-3 align-items-center ms-auto">
            <button className="btn btn-soft fw-bold" onClick={() => setDir(dir === 'ltr' ? 'rtl' : 'ltr')}>
              {dir.toUpperCase()}
            </button>
            <button className="btn btn-soft" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            
            <div className="dropdown">
              <button className="btn btn-soft position-relative p-2 rounded-circle" data-bs-toggle="dropdown">
                <FaBell size={16} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{fontSize: '9px'}}>1</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end mt-2" style={{width: '280px'}}>
                <li><h6 className="dropdown-header fw-bold">Notifications</h6></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item py-2" href="#"><strong>Charging Complete:</strong> Your vehicle at Tata Power is ready.</a></li>
              </ul>
            </div>
          </div>
        </header>
 
        <main className="p-4 flex-grow-1">{children}</main>
      </div>
    </div>
  );
}
 
export default function App() {
  const [theme, setTheme] = useState('dark');
  const [dir, setDir] = useState('ltr');
 
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('dir', dir);
  }, [theme, dir]);
 
  return (
    <BrowserRouter>
      <Layout theme={theme} setTheme={setTheme} dir={dir} setDir={setDir}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/find" element={<FindStation />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/history" element={<History />} />
          <Route path="/owner" element={<OwnerDashboard />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}