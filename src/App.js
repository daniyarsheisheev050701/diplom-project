import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Service from './Components/Service';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contacts' element={<Contacts/>}/>
      <Route path='service' element={<Service/>}/>
     </Routes>
    </div>
  );
}

export default App;
