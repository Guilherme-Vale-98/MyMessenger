
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';




function App() {
  return (  
    <BrowserRouter>
      <Navbar/>
      <Routes>       
        <Route exact path='/' Component={Home}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
