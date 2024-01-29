import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Cart from './Pages/Cart';
import ForgotPassword from './Pages/Forgotpassword';
import ResetPassword from './Pages/Resetpassword';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux/store"
import Checkout from './Pages/Checkout'
import Success from './Pages/Success';
import { Provider } from 'react-redux';

function App () {
 return (
    <Provider store={store}>
      
      <div >  
       <Routes >
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgotpassword" element={<ForgotPassword/>} />
          <Route path="/resetpassword" element={<ResetPassword/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout/" >
            <Route path="" element={<Checkout/>} />
            <Route path=":id" element={<Checkout/>} />
         </Route>
         <Route path="/success" element={<Success/>} />

       </Routes>    
       </div>
     </Provider>

 );
};



export default App;
