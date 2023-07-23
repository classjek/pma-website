import './App.css';
import { Navbar, Footer } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/pages/About'
import About2 from './components/pages/About2'
import Stories from './components/pages/Stories'
import MisTerras from './components/pages/MisTerras'
import LaSelfie from './components/pages/LaSelfie'
import Education from './components/pages/Education'


function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about2' element={<About2 />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/misterras' element={<MisTerras />} />
          <Route path='/laselfie' element={<LaSelfie />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
