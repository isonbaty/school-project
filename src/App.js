import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/home';
import Login from './pages/login';
import Signin from './pages/signin';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route
            path='*'
            element={
              <div>
                <h2>Page not found</h2>
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
