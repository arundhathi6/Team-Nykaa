import "./Product.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from "react-redux";
import { ListItemSecondaryAction } from "@mui/material";
// import { addData,deleteData } from "../../redux/actions";
import {useEffect,useState} from "react";
export const Navbar = ()=>{
   const {items} = useSelector((store) => {
      return store.bag;
     });
// const [val,setValue]=useState();
     const options = [ { label:1, value:1}, { label:2, value:2}, { label:3, value:3}, { label:4, value:4}, { label:5, value:5}]
       
// console.log("value..",val)

// console.log(options)
// let sum=0;
// items.map((e)=>(
//    sum= sum+e.price
// )


   return(<div className="navbar">
          
        <span className="shopping_bag" onClick={()=>{
             
             let xyz = document.getElementById("sliding_bar1");
                xyz.style.display=="block"?xyz.style.display="none":xyz.style.display="block";
            console.log("checking..")
         
     }}><ShoppingBasketIcon></ShoppingBasketIcon>
     <button className="cart_itemzz">{items.length}</button></span>
  

   <div id="sliding_bar1" className="sliding_bar">
      <div className= "black_border">
         <div  className="top_tag">Shopping Bag({items.length})</div>
       
            {items.map((e)=>(
         //   let num=0;
               <div style={{border:"2px solid #F5F5F5",height:"150px",backgroundColor:"white",marginBottom:"8px"}}>
                  
               <div className="img_desc">
                  <img src={e.image}/>
                  <div>
                  <p className="title_name">{e.name}</p>
                  <div className="price_discount_wrapper">
                  <p>MRP:₹{e.price}</p>
                  <p>Discount:{e.discount}%</p>
                  </div>
                  </div>
             </div>
               <hr></hr>
               <div className="qty_discount">
                  <div className="qty">
                  quantity : <select>
                  {/* onChange={(e)=>setValue(e.target.value)} */}
                     {/* {options.map((option)=>(
                       <option onClick={console.log("kiii")} value={option.value}>{option.label}</option>
                   ))} */}
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                     </select>
                     </div>
                  <div className="discount_price">₹{Math.floor(e.price-(e.discount/100*e.price))}</div>
               </div> <br></br>
            
         </div>
            ))} 
             <div className="payment_box">
                  <div className="payment_details_tag">Payment Details</div>
                  <div className="row_1">
                     <p className="productzz">Bag Total</p>
                     <p className="prizz">00</p>
                  </div>

                  <div className="row_2">
                  <p className="productzz">sub Total</p>
                  <p className="prizz">00</p>
                  </div>

                  <div className="row_3">
                  <p className="productzz">Shipping Charge</p>
                  <p className="prizz">Free</p>
                  </div>

                  <div className="row_4">
                  <div className="bundle_it">
                    <p className="productzz">Grand Total</p>
                    <p className="productzz">₹300</p>
                  </div>
                  <div className="prizz proceed_btn">
                  <button className="prizz proceed_btn proceed_btn1 ">PROCEED</button>
                  <ArrowForwardIosIcon className="prizz proceed_btn"></ArrowForwardIosIcon>
                  </div>
                 
                  </div>
               </div>
   </div>
   </div>
   
           
   </div>
  )
}