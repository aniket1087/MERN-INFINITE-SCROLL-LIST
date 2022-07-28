import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Registeration from './pages/Registeration';
import Home from './pages/Home';
import Welcome from './pages/Welcome';


function App() {

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Welcome/>}></Route>
      <Route path='/login' exact element={<Login />}></Route>
      <Route path='/register' exact element={<Registeration />}></Route>
      <Route path='/home' exact element={<Home />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
