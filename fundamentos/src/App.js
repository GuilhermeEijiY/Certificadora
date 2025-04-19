import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom'
import './App.css';


//pages
import Home from './pages/Home';


//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Fundamentos from './pages/Fundamentos';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
            <Route path='/Fundamentos' element={<Fundamentos/>}/>
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
