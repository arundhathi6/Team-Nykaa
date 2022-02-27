<<<<<<< HEAD


import "./Success.css";
import {Link} from "react-router-dom";
=======
// export const Success=()=>{
//     return (
//         <div>
//             <h1>Success page</h1>
            
            
//         </div>
//     )
// }

import "./Success.css"
>>>>>>> 19632ef4eae75811974e1380129618b3b5ef34fa

export const Success=()=>{
    return(
        <div className="body_success">
            <img className="img_success" src="https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png" alt=""/>
    <h2>Thank you for your purchase!</h2>
    <p>Your order id:2858851<span id='order'></span></p>

<<<<<<< HEAD
   
    <button className="button_success"><Link to={"/" } style={{textDecoration:"none",color:"white"}}>Continue Shopping</Link></button>
=======
    <button className="button_success" onclick="">Continue Shopping</button>
>>>>>>> 19632ef4eae75811974e1380129618b3b5ef34fa
        </div>
    )
}