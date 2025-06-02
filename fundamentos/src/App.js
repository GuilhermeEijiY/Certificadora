import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import './App.css';


//pages
import Home from './pages/Home';


//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Fundamentos from './pages/Fundamentos';
import Exercicios from './pages/Exercicios';
import Desafios from './pages/Desafios';
import SimuladorPassoAPasso from './pages/SimuladorPassoAPasso';
import GuiaBoasPraticas from './pages/GuiaBoasPraticas';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/Fundamentos' element={<Fundamentos/>}/>
            <Route path='/Exercicios' element={<Exercicios/>}/>
            <Route path='/Desafios' element={<Desafios/>}/>
            <Route path='/SimuladorPassoAPasso' element={<SimuladorPassoAPasso/>}/>
            <Route path='/GuiaBoasPraticas' element={<GuiaBoasPraticas/>}/>
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
