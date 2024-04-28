import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
// import AppLayout from './components/Layout/AppLayout';

function App() {
  return (
    <div className="">
      <Router>
        {/* <AppLayout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* </AppLayout> */}
      </Router>
    </div>
  );
}

export default App;
