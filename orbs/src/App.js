import './App.css';
import Orbs from './components/Orbs';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import Wizard from './components/Wizard';

function App() {
  
  return (
    <BrowserRouter>   
      <Routes>
        <Route path='/' element={<Orbs />} />
        <Route path='/wizard' element={<Wizard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
