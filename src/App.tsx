import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';
import { Calculator } from './pages/Calculator';
import SharedLayout from './pages/SharedLayout';

function App() {

  return (
    <Router basename="/HEALTH-APP">
      <Routes>
          <Route path='/' element={<SharedLayout />} >
          <Route path="/" element={<Home />} />
          <Route path='/calculator' element={<Calculator />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App
