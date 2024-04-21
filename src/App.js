import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components

import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <header>
              <div className="navBar">
                  <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/about">About Us</Link>
                    </li>
                  </ul>
              </div>
          </header>
          {/* <div className='display'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div> */}
      </Router>
    </div>
  );
}

export default App;
