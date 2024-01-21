import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/Forgotpassword';
import ResetPassword from './Pages/Resetpassword';
import Products from './Pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/products" element={<Products/>} />


       </Routes>
    </>
 );
};



export default App;
