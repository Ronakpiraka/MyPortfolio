import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Education from './components/Education';
import CollegeClubs from './components/CollegeClubs';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/education' element={<Education />} />
        <Route path='/college-clubs' element={<CollegeClubs />} />
        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
