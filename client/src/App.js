
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Kidscornerauthors from './pages/Kidscornerauthors';
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import Upload from "./pages/Upload";
import 'bootstrap/dist/css/bootstrap.css';
import Info from './pages/Info';
import Testing from './pages/Testing';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Checkout from "./pages/Checkout";



function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path ="/" element={<Kidscornerauthors/>} /> 
      <Route path="/order" element={<Orders/>} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/upload" element={<Upload />} />
      <Route path='/register' element={<Register/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/testing' element={<Testing/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
