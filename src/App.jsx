import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Collections from './pages/Collections.jsx';
import Stock from './pages/Stock.jsx';
import Contact from './pages/Contact.jsx';
import CarDetail from './pages/CarDetail.jsx';
import Request from './pages/Request.jsx';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="page-shell">
        <header className="topbar topbar-pill">
          <div className="brand brand-inline">
            <div className="brand-mark logo-mark">N&C</div>
            <div>
              <p className="brand-title">N&C Benz Spectrum</p>
              <p className="brand-tagline">A World of Luxury in Every Color</p>
            </div>
          </div>
          <nav className="nav-links nav-pill">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/collections">Collections</NavLink>
            <NavLink to="/stock">Stock</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collections/:carId" element={<CarDetail />} />
          <Route path="/request" element={<Request />} />
        </Routes>

        <footer className="site-footer">
          <div className="footer-brand">
            <div className="brand-mark logo-mark">N&C</div>
            <div>
              <p className="brand-title">N&C Benz Spectrum</p>
              <p className="brand-tagline">Black, silver and soft lavender — curated Mercedes-Benz collections.</p>
            </div>
          </div>
          <div className="footer-contact-info">
            <p>1010 Avenue of the Moon</p>
            <p>New York, NY 10018</p>
            <p>hello@ncbenzspectrum.com</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
