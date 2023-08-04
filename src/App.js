import './App.css';
import './Pages/Home.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import News from './Pages/News';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/news' element={<News/>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;