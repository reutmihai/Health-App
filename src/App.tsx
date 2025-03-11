import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import { HomePage } from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {

  return (
    <Router basename="/HEALTH-APP">
      <Routes>
          <Route path='/' element={<SharedLayout />} >
          <Route path='/' element={<HomePage />}>
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App
