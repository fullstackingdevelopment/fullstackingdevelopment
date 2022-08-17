import { Routes, Route } from 'react-router-dom';
import logo from './components/images/logo.svg';
import Home from './components/Home';
import AboutUs from './components/About';
import Contribute from './components/Contribute';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element ={<AboutUs />} />
        <Route path='contribute' element={<Contribute />} />
        <Route path='*' element={<div>ERROR</div>} />
      </Routes>
    </div>
  )
}

export default App;
