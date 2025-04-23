import './App.css';
import Header from './components/header/Header'; 
import Footer from './components/footer/Footer';
import SingleHotel from './pages/single-hotel/SingleHotel';
import Home from './pages/home/Home';
import { AuthProvider } from './context/authContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <main className="main-content"> 
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/hotel/:slug" element={<SingleHotel />} />
          </Routes>
        </main>
        <Footer />
      </Router> 
    </AuthProvider>
  );
}

export default App;
