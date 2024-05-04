import './App.css';


import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Homepage />} />

      </Routes>
    </Router>
  );
}

export default App;

