
import  "./Product.css";
import { poducts } from '../constant/data'
export const Products = ()=>{
    return(
        <div className="container">
        {
            poducts.map((e) =>{
            return <Userdata price = {e.price} image={e.image} name={e.name}/>
          })}
          </div>
    )

}

function Userdata(props){
    return (<div>
      <div className="card">
          <img src={props.image}/>
          <p>{props.name}</p>
          <p className="price">MRP:{props.price} <span className='off'>15% off</span></p>
          <p>inclusive of all taxes</p>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
         <span className="fa fa-star checked"></span>
         <span className="fa fa-star checked "></span>
          <span className="fa fa-star checked"></span>
  
          <p><button className="card button">Add to Bag</button></p>
          
        </div> 
    </div>)
  }