
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';

function Navigation() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/tab1');
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/tab1">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-tabs d-flex w-100">
            <li className="nav-item flex-fill ">
              <NavLink className="nav-link" exact activeClassName="active"  to="/tab1">Bar Chart</NavLink>
            </li>
            <li className="nav-item flex-fill">
              <NavLink className="nav-link" exact activeClassName="active" to="/tab2">Scatter Chart</NavLink>
            </li>
            <li className="nav-item flex-fill">
              <NavLink className="nav-link " exact activeClassName="active" to="/tab3">Area Chart</NavLink>
            </li>
            <li className="nav-item  flex-fill">
              <NavLink className="nav-link"  activeClassName="active" to="/tab4">Heatmap Chart</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div class="container bordered">
        <div className="tab-content">
        <Routes>
          <Route path="/tab1" element={<Tab1 />} />
          <Route path="/tab2" element={<Tab2 />} />
          <Route path="/tab3" element={<Tab3 />} />
          <Route path="/tab4" element={<Tab4 />} />

        </Routes>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;