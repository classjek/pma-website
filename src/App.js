import './App.css';
import { Navbar, Footer } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Stories from './components/pages/Stories'
import IndividualStory from './components/pages/IndividualStory'
import MisTerras from './components/pages/MisTerras'
import IndividualPlace from './components/pages/IndividualPlace'
import LaSelfie from './components/pages/LaSelfie'
import IndividualPerson from './components/pages/IndividualPerson'
import Education from './components/pages/Education'



function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/stories/:id' element={< IndividualStory/>} />
          <Route path='/misterras' element={<MisTerras />} />
          <Route path='/misterras/:id' element={<IndividualPlace/>} />
          <Route path='/laselfie' element={<LaSelfie />} />
          <Route path='/laselfie/:id' element={<IndividualPerson />} />
          <Route path='/education' element={<Education />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
