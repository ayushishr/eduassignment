import './App.css';
import { Routes , Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';
function App() {
  return (
    <div className="App">
        <ToastContainer />
      <Routes>
        <Route path='' element={<Home />}  />
        <Route path='/signUp' element ={<SignUp />}  />
        <Route path='/login' element ={<Login />}  />
        <Route path='/profile' element ={<Profile />}  />
      </Routes>
    </div>
  );
}

export default App;
