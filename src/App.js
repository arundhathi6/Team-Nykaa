
import "./App.css";
import {Skin} from "./components/home/Productz/Skin.jsx";
import {Home} from "./components/home/Homez/homes.jsx";
import {Login} from "./components/home/Loginproducts/Login.jsx";
import {Address} from "./components/home/Address/address.jsx";
import {Payment} from "./components/home/Paymentz/Payment.jsx";
import {Success} from "./components/home/Succezz/Success.jsx";
import Signup from "./components/home/signUp/Signup.jsx";
import Emailpass from "./components/home/signUp/Emailpass.jsx";
import Register from "./components/home/signUp/Register.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/pro" element={<Skin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/emailpass" element={<Emailpass/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/pro/cart" element={<Login/>}></Route>
        <Route path="/pro/cart/address" element={<Address/>}></Route>
        <Route path="/pro/cart/address/payment" element={<Payment/>}></Route>
        <Route path="/pro/cart/address/payment/success" element={<Success/>}></Route>

      </Routes>
    </div>
  );
}
export default App;

