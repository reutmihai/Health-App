import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import { HomePage } from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomeUser from "./components/HomeUser";
import DiaryPage from "./pages/DiaryPage";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <Router basename="/Health-App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/calculator" element={<HomeUser />} />
          <Route path="/diary" element={<DiaryPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
