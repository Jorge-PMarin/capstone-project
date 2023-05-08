import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<NotFoundPage />} />
        <Route path="/reservations" element={<NotFoundPage />} />
        <Route path="/order" element={<NotFoundPage />} />
        <Route path="/login" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
