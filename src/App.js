import { Routes, Route } from 'react-router-dom';
import logo from './components/images/logo.svg';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contribute from './components/HowToContribute';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element ={<AboutUs />} />
        <Route path='howtocontribute' element={<Contribute />} />
      </Routes>
    </div>
  )
}

export default App;
