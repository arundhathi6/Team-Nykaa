import axios from "axios";
import  "./Product.css";
import {useDispatch,useSelector} from "react-redux"
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useState, useEffect } from "react";
import { addData,deleteData } from "../../../redux/actions";

// import {store} from "../../redux/store";
export const Products = ()=>{
  const [productz, setproductz] = useState([])
  const dispatch = useDispatch()
  const {items} = useSelector((store) => {
    return store.bag;
   });
console.log("items..", items);
const getData = ()=>{
  axios.get("https://nykaa-api-mongodbapi.herokuapp.com/user")
  .then(({data})=>{
    setproductz(data)
    //console.log(data)

  })
}

// const addToarr=(id)=>{
  // axios.get(`https://nykaa-product-api.herokuapp.com/${id}`)
  // .then(({data})=>{
  //  dispatch(addData(data))
  //  console.log(data)
  //  console.log("added")
  // })
  
  // }
useEffect(()=>{
  getData();
},[])
console.log(productz)


 return(
   <div className="containerr">
 {
 productz.map((e) =>{
// return <Userdata price = {e.price} image={e.image} name={e.name} discount={e.discount} rating={e.rating} id={e.id} />
 return (<div>
  <div className="card">
      <img src={e.image}/>
      <p>{e.name}</p>
      <p className="price">MRP:{e.price} <span className='off'>{e.discount}%Off</span></p>
      <p>inclusive of all taxes</p>
      <div className="stars">
           {Array(e.rating==0?1:e.rating).fill().map((e)=>(<p className="checked">{<StarOutlinedIcon ></StarOutlinedIcon>}</p>))}</div>


            <p onClick={()=>{
         axios.get(`https://nykaa-api-mongodbapi.herokuapp.com/user/${e._id}`)
          .then(({data})=>{
            dispatch(addData(data))
             console.log(data);
            console.log("added")
           })
           
            }}><button className="card_button">Add to Bag</button></p>
    </div> 
    </div>)
  
  })} 
  </div>

    )
}


//function Userdata(props){
    // return (<div>
    //   <div className="card">
    //       <img src={props.image}/>
    //       <p>{props.name}</p>
    //       <p className="price">MRP:{props.price} <span className='off'>{props.discount}%Off</span></p>
    //       <p>inclusive of all taxes</p>
          {/* <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
         <span className="fa fa-star checked"></span>
         
          <span className="fa fa-star checked"></span> */}
       
    //       <div className="stars">
    //        {Array(props.rating==0?1:props.rating).fill().map((e)=>(<p className="checked">{<StarOutlinedIcon ></StarOutlinedIcon>}</p>))}</div>
    //         <p onClick={()=>{
    //        axios.get(`https://nykaa-product-api.herokuapp.com/${props.id}`)
    //        .then(({data})=>{
    //         dispatch(addData(data))
    //         console.log(data)
    //         console.log("added")
    //        })
           
    //         }}><button className="card_button">Add to Bag</button></p>
    // </div> 
    // </div>)
  //}