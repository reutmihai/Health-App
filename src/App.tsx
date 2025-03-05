import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
// import { Login } from './pages/Login';
// import { Register } from './pages/Register';
import SharedLayout from './pages/SharedLayout';
import { HomePage } from './pages/HomePage';

function App() {

  return (
    <Router basename="/HEALTH-APP">
      <Routes>
          <Route path='/' element={<SharedLayout />} >
          <Route path='/' element={<HomePage />}>
          </Route>
          {/* <Route path='/login' element={<Login />} />
          <Route path='/login' element={<Register />} /> */}
          </Route>
        </Routes>
    </Router>
  );
}

export default App
