import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import { Calculator } from './pages/Calculator';

function App() {

  return (
    <Router basename="/HEALTH-APP">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
        </Routes>
    </Router>
  );
}

export default App
