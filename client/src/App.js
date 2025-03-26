
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Orders from "./pages/Orders";
import Tracking from "./pages/Tracking";
import Upload from "./pages/Upload";
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login';
import Register from './pages/Register';
import ProtectedRoute from './features/ProtectedRoute';
import AdminRoute from './features/adminRoute';
import Unauthorized from "./pages/Unathorized"
import Admin from './pages/Admin';
import AppAdmin from './pages/AppAdmin';






function App() {

 

  
  return (
    <BrowserRouter>
    <Routes>
    

      {/* //Public routes */}
      
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/> 
      <Route path='/unauthorized' element={<Unauthorized/>}/> 
    
     

      {/* Protected routes for Users and Facilitator */}

      <Route element={<ProtectedRoute/>}>
      {""}
        <Route path="/order" element={<Orders/>} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/upload" element={<Upload />} />
        
      </Route>
      {/* Protected routes for Admin */}
      <Route element={<AdminRoute/>}>
      {""}
        <Route path="/admin/*" element={<AppAdmin/>} />
        <Route path='/configure' element={<Admin/>}/>
        
        
      </Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
