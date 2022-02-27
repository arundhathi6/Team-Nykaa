

import "./Success.css";
import {Link} from "react-router-dom";

export const Success=()=>{
    return(
        <div className="body_success">
            <img className="img_success" src="https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png" alt=""/>
    <h2>Thank you for your purchase!</h2>
    <p>Your order id:2858851<span id='order'></span></p>

   
    <button className="button_success"><Link to={"/" } style={{textDecoration:"none",color:"white"}}>Continue Shopping</Link></button>
        </div>
    )
}