import './App.css';
import { Route, Routes } from 'react-router-dom';
import FavList from './components/FavList/FavList';
import Home from './components/Home/Home';
import  Navbar  from './components/Navbar/Navbar';

function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
       
          <Route path='/' exact  element={<Home/>} />
          <Route path='/favorite' exact element={<FavList/>} />
        
      </Routes>
    </div>
  );
}

export default App;
