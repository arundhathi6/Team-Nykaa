// export const Success=()=>{
//     return (
//         <div>
//             <h1>Success page</h1>
            
            
//         </div>
//     )
// }

import "./Success.css"

export const Success=()=>{
    return(
        <div className="body_success">
            <img className="img_success" src="https://www.clipartmax.com/png/full/179-1795386_patient-success-success-icon-png.png" alt=""/>
    <h2>Thank you for your purchase!</h2>
    <p>Your order id:2858851<span id='order'></span></p>

    <button className="button_success" onclick="">Continue Shopping</button>
        </div>
    )
}