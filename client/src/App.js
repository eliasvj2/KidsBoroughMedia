
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Kidscornerauthors from './pages/Kidscornerauthors';
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import Upload from "./pages/Upload";
import 'bootstrap/dist/css/bootstrap.css';
import Info from './pages/Info';
import Testing from './pages/Testing';


function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path ="/" element={<Kidscornerauthors/>} /> 
      <Route path="/order" element={<Orders/>} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/upload" element={<Upload />} />
      <Route path='/info' element={<Info/>}/>
      <Route path='/testing' element={<Testing/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
