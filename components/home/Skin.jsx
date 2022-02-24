import { Banner } from "./Banner.jsx"
import { Products } from "./Products.jsx"
import { SkinBanner } from "./SkinBanner.jsx"


export const Skin=()=>{
    return(
       <>
       <h3>The Pink Foundry (24)</h3>
      <SkinBanner/>
      <h3>All Products</h3>
     <Products/>
   
      </>
       
    )
}