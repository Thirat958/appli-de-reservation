import './App.css';
import Header from './components/header/Header'; 
import Footer from './components/footer/Footer';
import SingleHotel from './pages/single-hotel/SingleHotel';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Searchbar from './components/searchbar/Searchbar';
function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Searchbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/hotel/:id" element={<SingleHotel />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
