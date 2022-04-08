
import "./App.css";
import {Skin} from "./components/home/Productz/Skin.jsx";
import {Home} from "./components/home/Homez/homes.jsx";
import {Login} from "./components/home/Loginproducts/Login.jsx";
import {Address} from "./components/home/Address/address.jsx";
import {Payment} from "./components/home/Paymentz/Payment.jsx";
import {Success} from "./components/home/Succezz/Success.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="/pro" element={<Skin/>}></Route>
        <Route path="/pro/cart" element={<Login/>}></Route>
        <Route path="/pro/cart/address" element={<Address/>}></Route>
        <Route path="/pro/cart/address/payment" element={<Payment/>}></Route>
        <Route path="/pro/cart/address/payment/success" element={<Success/>}></Route>

      </Routes>
    </div>
  );
}
export default App;

