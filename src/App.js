
import './App.css';

import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

import About from './components/About';
import BookList from './components/BookList';


function App() {
  return (
    <div className="App">
   <Navbar/>
   {/* <Home/> */}
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/aboutus' element={<About/>}></Route>
    </Routes>
 
    </div>
  );
}

export default App;
