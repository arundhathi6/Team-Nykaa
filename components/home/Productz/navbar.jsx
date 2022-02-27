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







   return(<div>

<ul className="nav">
        <li>
          <img
            className="icon"
            src="data:image/png;base64,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"
          />
        </li>
        <h4 className="list">CATEGORIES</h4>
        <h4 className="list">BRAND</h4>
        <h4 className="list">NYKAA FASHION</h4>
        <h4 className="list">BEAUTY ADVICE</h4>
        <h4 className="list">NYKAA NETWORK</h4>
        <h4 className="input">
          <input type="text" placeholder="Serach of Nykaa" />
        </h4>
        <li className="sign">Account</li>
        <li>
          {/* <img
            className="icon1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEHiKoMx6NsyUydoSSclc61gc7HdMm9K1EDw&usqp=CAU"
          /> */}
            <span className="shopping_bag" onClick={()=>{
            let zyx = document.getElementById("payment_box1");
             let xyz = document.getElementById("sliding_bar1");
                xyz.style.display=="block"?xyz.style.display="none":xyz.style.display="block";
               items.length==0?zyx.style.display="none":zyx.style.display="block";
               
            console.log("checking..")

         
     }}><ShoppingBasketIcon></ShoppingBasketIcon>
     <button className="cart_itemzz">{items.length}</button></span>
        </li>
      </ul>
      <hr></hr>
      <ul className="list1">
        <li className="list2">Makeup</li>
        <li className="list2">Skin</li>
        <li className="list2">Hair</li>
        <li className="list2">Appliances</li>
        <li className="list2">Personal Care</li>
        <li className="list2">Natural</li>
        <li className="list2">Mom & Baby</li>
        <li className="list2">Health & Wellness</li>
       
      </ul>





       
          {/* ****shipping Basket**** */}
        {/* <span className="shopping_bag" onClick={()=>{
            let zyx = document.getElementById("payment_box1");
             let xyz = document.getElementById("sliding_bar1");
                xyz.style.display=="block"?xyz.style.display="none":xyz.style.display="block";
               items.length==0?zyx.style.display="none":zyx.style.display="block";
               
            console.log("checking..")

         
     }}><ShoppingBasketIcon></ShoppingBasketIcon>
     <button className="cart_itemzz">{items.length}</button></span> */}
       {/* ****shipping Basket**** */}



  
       {/* ********complete sliding window******* */}


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
                     <Link to={"/pro/cart"} className="prizz proceed_btn">
                     <button className="prizz proceed_btn proceed_btn1 ">PROCEED</button>
                  <ArrowForwardIosIcon className="prizz proceed_btn"></ArrowForwardIosIcon>
                     </Link>
                  
                  </div>
                 
                  </div>
               </div>
   </div>
   </div>


   {/* ********complete sliding window******* */}
           
   </div>
  )

}