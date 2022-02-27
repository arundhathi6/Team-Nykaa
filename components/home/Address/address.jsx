import "./address.css";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";

export const Address=()=>{
    const {items,total_amount} = useSelector((store) => {
        return store.bag;
       });

       const options = [ { label:1, value:1}, { label:2, value:2}, { label:3, value:3}, { label:4, value:4}, { label:5, value:5}]
       
       let sum=0;
       let bag_tot=0;
       items.map((e)=>{
       let add= Math.floor(e.price-(e.discount/100*e.price))
       sum=sum+add;
       bag_tot=bag_tot+e.price;
    })


    function signUp() {
        var name = document.querySelector('#name').value;
        document.getElementById("for_name").innerHTML="Name"+" "+":"+name;
        var mobile = document.querySelector('#mobile').value;
        document.getElementById("for_mobile").innerHTML="Mobile"+" "+":"+mobile;
        var postal = document.querySelector('#postal_code').value;
        document.getElementById("for_pin").innerHTML="Pin"+" "+":"+postal;
        var address = document.querySelector('#address_aa').value;
        document.getElementById("for_address").innerHTML="Address"+":"+address;
       
      }


    return(
<div className="address_body">
<div id="navbar_bbc">
      <div id="nykaa_img_bbc">
        <svg xmlns="http://www.w3.org/2000/svg" width="106" height="37">
          <path
            fill="#FC2779"
            fill-rule="evenodd"
            d="M13.033 16.362S8.201 27.575 6.65 31.543c-1.552 3.968-2.487 4.618-4.606 4.618-2.12 0-2.162-1.37-1.973-2.26.188-.89 8.132-18.266 8.132-18.266s4.7-10.225 5.817-11.953c1.117-1.73 2.334-2.26 3.78-1.515 1.447.744.663 6.367.247 10.722-.415 4.355-.227 6.56-.227 6.56l5.092-10.512s2.692-5.94 3.787-7.131c1.096-1.19 2.746-.98 3.46-.614.712.365.812.739-.037 2.466-.849 1.727-4.795 9.605-4.795 9.605s-1.445 2.72-4.362 9.312c-2.918 6.592-4.445 11.32-4.445 11.32s-.761 2.186-2.603 2.186c-1.841 0-2.093-1.513-1.909-3.614.185-2.101 1.025-16.105 1.025-16.105zM32.552 3.268S33.849.934 35.504.934s1.851 1.18 1.326 2.371c-.526 1.191-3.35 7.172-3.35 7.172s-1.395 3.296 1.176 3.296c2.572 0 5.69-6.471 7.305-9.242 1.616-2.77 2.603-3.564 3.782-3.564 1.179 0 2.967.816 1.484 3.6-1.484 2.785-4.974 8.061-4.974 8.061s-4.305 7.093-7.003 12.478c-2.698 5.384-1.653 2.943-3.258 6.545-1.606 3.602-3.076 4.492-4.263 4.492-1.187 0-2.388-.876-1.89-2.46.498-1.583 4.58-8.084 4.58-8.084s3.799-5.718 3.799-6.885c0-1.168-2.072-.437-3.442-.437s-3.32-.265-3.32-3.261 5.096-11.748 5.096-11.748zm14.243 15.647s-2.156 3.914-4.78 10.276c-2.624 6.361-4.025 6.922-5.704 6.922-1.678 0-2.18-1.114-1.923-2.155.257-1.04 5.348-11.722 5.348-11.722s4.369-8.176 7.129-12.742C49.625 4.928 51.979.8 55.278.8c3.3 0 1.235 3.041 0 4.87-1.234 1.83-4.398 6.08-4.398 6.08s2.366-1.162 6.954-4.718C62.424 3.476 65.35.81 67.211.81c1.86 0 2.519 1.648 2.519 1.648s.794.701-2.054 2.637c-2.847 1.936-8.912 6.297-11.88 7.954s-4.894 3.484-4.894 3.874c0 .39.082 1.163 1.184 3.704 1.101 2.54 3.132 7.433 3.287 7.433.154 0 5.733-8.347 5.733-8.347s9.87-14.149 12.156-16.479c2.286-2.33 3.31-2.289 3.96-2.289.648 0 2.131-.153 2.131 2.411 0 2.565-1.966 15.152-1.966 15.152l3.846-.873 5.828-14.042s1.007-2.569 3.455-2.569c2.448 0 3.094 1.043 3.094 2.557s.441 11.469.441 11.469l9.204-1.805s2.743-.506 2.743 1.722c0 2.228-.474 2.427-2.293 2.766-1.82.339-9.4 1.391-9.4 1.391s-.123 1.503.231 5.585c.355 4.08.849 6.519.849 8.792 0 2.274-3.375 2.324-3.375 2.324s-2.117.623-2.324-3.328c-.207-3.95-.211-12.544-.211-12.544l-4.874.92s-1.174 3.74-1.83 6.76c-.656 3.021-1.459 8.243-4.3 8.243-2.84 0-2.04-2.859-1.406-5.237.632-2.379 2.732-8.882 2.732-8.882l-2.946.6s-.35 1.387-.744 3.989c-.394 2.601-.426 8.414-3 9.112-2.574.697-3.66.047-3.66-2.386 0-2.433 1.897-9.425 1.897-9.425l-9.46 1.698s-2.95 5.883-4.572 8.518c-1.622 2.635-2.485 2.324-3.998 2.324-1.513 0-2.477-3.403-3.53-7.016-1.05-3.612-2.989-10.257-2.989-10.257zm38.829-2.22l4.028-.864-.433-9.06-3.595 9.923zm-21.13 4.695l7.405-1.59 1.897-11.437-9.303 13.027z"
          ></path>
        </svg>
      </div>
      <div id="sub_navbar_bbc">
        <ul className="address_li">
          <li>1 - LOGIN</li>
          <li>2 - ADDRESS</li>
          <li>3 - PAYMENT</li>
        </ul>
      </div>
    </div>

    <div id="outer_bb">
      <div id="left_div_bbc">
        <div>New Address</div>
        <div className="add_address" style={{color:"black"}}>
        <p id="for_name"></p>
        <p id="for_mobile"></p>
        <p id="for_pin"></p>
        <p id="for_address"></p>
        </div>
       
        <hr />
      </div>
      <div id="middle_div_bbc">
        <div>
          <p>New Address</p>
          <hr />
          <br />
          <p>India</p>
          <hr />
          <input id="name" type="text" placeholder="Enter Name" />
          <input type="text" id="mobile" placeholder="Enter Mobile Number" />
          <input type="text" id="postal_code" placeholder="Postal Code" />
          <textarea
            id="address_aa"
            cols="50"
            rows="5"
            placeholder="Enter Address"
          ></textarea>
          <button id="address_button_bbc" onClick={()=>{
              signUp();
            
          }}>SHIP TO THIS ADDRESS</button>
        </div>
      </div>
      <div id="right_div_bbc">
        <div>
        <div id="scroll_div_aa">
                {items.map((e)=>(
       
               <div style={{border:"2px solid #F5F5F5",height:"150px",backgroundColor:"white",marginBottom:"8px"}}>
                  
               <div className="img_desc_aa">
                  <img src={e.image}/>
                  <div>

                  <p className="title_name_aa">{e.name}</p>
                  <div style={{display:"flex",justifyContent:"space-between",paddingRight:"10px",marginTop:"-10px"}}>
                  {/* <div className="price_discount_wrapper">
                  <p>MRP:₹{e.price}</p>
                  <p>Discount:{e.discount}%</p>
                  </div> */}
                 
                  </div>
              
                  </div>
             </div>
               <hr></hr>
               <div className="qty_discount_aa">
               <div className="qty_aa">
                  quantity : <select>
                  
                     {options.map((option)=>(
                       <option value={option.value}>{option.label}</option>
                   ))}
                     
                     </select>
                     </div>
                 
                  <div id="discount_price1_aa" className="discount_price_aa">₹{Math.floor(e.price-(e.discount/100*e.price))}</div>
               </div> <br></br>
            
         </div>
            ))}
 </div>
          <div>
              {/* payment details */}
                 {/* ******* */}
                 <div id="payment_detail_aa">
                <div className="payment_details_tag_aa">Payment Details</div>
                 <div className="row_2_aa">
                  <p className="productzz_aa">sub Total</p>
                  <p className="prizz_aa">₹{total_amount}</p>
                  </div>
                 <div className="row_3_aa">
                  <p className="productzz_aa">Shipping Charge</p>
                  <p className="prizz_aa" style={{color:"green"}}>Free</p>
                  </div>
                   <div className="row_0_aa">
                     <p className="productzz_aa">Discount</p>
                     <p className="prizz_aa">-₹{bag_tot-total_amount}</p>
                  </div>
                  <div className="row_4_aa">
                     <p className="productzz_aa">Grand Total</p>
                     <p className="prizz_aa">₹{total_amount}</p>
                  </div>
                  
                </div>
                {/* ******* */}
<<<<<<< HEAD
            <button id="pay_aa"><Link to={"/pro/cart/address/payment" } style={{textDecoration:"none",color:"white"}}>PAY</Link></button>
=======
            <button id="pay_aa"><Link to={"/cart/address/payment" } style={{textDecoration:"none",color:"white"}}>PAY</Link></button>
>>>>>>> 19632ef4eae75811974e1380129618b3b5ef34fa
          </div>
          </div>
         
        </div>
      </div>
    </div>

 

    )}









    {/* <h1>address</h1> */}
{/* <button><Link to="/cart/address/payment">Go to Payment..</Link></button> */}



