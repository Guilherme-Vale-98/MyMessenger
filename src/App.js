
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AuthProvider from './context/authContext';
import Privateroute from './components/Privateroute';




function App() {
  return ( 
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Privateroute/>}>
            <Route exact path='/' element={<Home/>}/>     
          </Route>       
          <Route exact path='/signup' element={<SignUp/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
