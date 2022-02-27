import "./Product.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSelector,useDispatch } from "react-redux";
import { ListItemSecondaryAction } from "@mui/material";
import { addData,deleteData,totalAmount} from "../../../redux/actions";
import {useEffect,useState} from "react";
export const Navbar = ()=>{
   const {items,total_amount} = useSelector((store) => {
      return store.bag;
     });
const [del,setDel]=useState(1);
const [disc,setDisc]=useState()
const dispatch = useDispatch();


const options = [ { label:1, value:1}, { label:2, value:2}, { label:3, value:3}, { label:4, value:4}, { label:5, value:5}]
       
   let sum=0;
   let bag_tot=0;
   items.map((e)=>{
   let add= Math.floor(e.price-(e.discount/100*e.price))
   sum=sum+add;
   bag_tot=bag_tot+e.price;
})


// console.log("aaaab",sum)//to find total amount
// let zyx = document.getElementById("payment_box1");
// items.length==0?zyx.style.display="none":zyx.style.display="block";         
useEffect(()=>{
 dispatch(totalAmount(sum));
 
},[sum])
console.log("total_amount",total_amount)

const deleteFunc=(e)=>{

dispatch(deleteData(e))
setDel(del+1);

}

useEffect(()=>{
  
   
  },[del])







   return(<div className="navbar">
       
          {/* ****shipping Basket**** */}
        <span className="shopping_bag" onClick={()=>{
            let zyx = document.getElementById("payment_box1");
             let xyz = document.getElementById("sliding_bar1");
                xyz.style.display=="block"?xyz.style.display="none":xyz.style.display="block";
               items.length==0?zyx.style.display="none":zyx.style.display="block";
               //  if(items.length==0){
               //    xyz.style.display="none" 
               //  }
            console.log("checking..")

         
     }}><ShoppingBasketIcon></ShoppingBasketIcon>
     <button className="cart_itemzz">{items.length}</button></span>
       {/* ****shipping Basket**** */}
  

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
                  <div style={{display:"flex",justifyContent:"space-between",paddingRight:"10px",marginTop:"-10px"}}>
                  <div className="price_discount_wrapper">
                  <p>MRP:₹{e.price}</p>
                  <p>Discount:{e.discount}%</p>
                  </div>
                  <p onClick={()=>{
                     deleteFunc(e)
                    
                  }}><DeleteForeverIcon ></DeleteForeverIcon></p>
                  </div>
              
                  </div>
             </div>
               <hr></hr>
               <div className="qty_discount">
                  <div className="qty">
                  quantity : <select>
                   {/* onChange={((e)=>{
                     if(e.target.value==2){
                        let dis_priz=document.getElementById("discount_price1");
                        // let amountzz = {e.price-(e.discount/100*e.price)}
                        let aa= `${e.price}`;
                        console.log("aa",aa)
                        // dis_priz.innerHTML=`${Math.floor(e.price-(e.discount/100*e.price))}`;
                        dis_priz.innerHTML= `${e.price-(e.discount/100*e.price)}`;
                     }
                  })}> */}
               
                     {options.map((option)=>(
                       <option value={option.value}>{option.label}</option>
                   ))}
                        {/* <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option> */}
                     </select>
                     </div>
                  <div id="discount_price1" className="discount_price">₹{Math.floor(e.price-(e.discount/100*e.price))}</div>
               </div> <br></br>
            
         </div>
            ))} 
            
             <div id= "payment_box1" className="payment_box">
                  <div className="payment_details_tag">Payment Details</div>
                  <div className="row_1">
                     <p className="productzz">Bag Total</p>
                     <p className="prizz">₹{bag_tot}</p>
                  </div>
                  <div className="row_0">
                     <p className="productzz">Bag Discount</p>
                     <p className="prizz">-₹{bag_tot-total_amount}</p>
                  </div>

                  <div className="row_2">
                  <p className="productzz">sub Total</p>
                  <p className="prizz">₹{total_amount}</p>
                  </div>

                  <div className="row_3">
                  <p className="productzz">Shipping Charge</p>
                  <p className="prizz">Free</p>
                  </div>

                  <div className="row_4">
                  <div className="bundle_it">
                    <p className="productzz">Grand Total</p>
                    <p className="productzz">₹{total_amount}</p>
                  </div>
                  <div >
                     <Link to={"/cart"} className="prizz proceed_btn">
                     <button className="prizz proceed_btn proceed_btn1 ">PROCEED</button>
                  <ArrowForwardIosIcon className="prizz proceed_btn"></ArrowForwardIosIcon>
                     </Link>
                  
                  </div>
                 
                  </div>
               </div>
   </div>
   </div>
   
           
   </div>
  )

}