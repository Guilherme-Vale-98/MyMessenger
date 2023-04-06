
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AuthProvider from './context/authContext';




function App() {
  return ( 
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>       
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/signup' Component={SignUp}></Route>
          <Route exact path='/login' Component={Login}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
