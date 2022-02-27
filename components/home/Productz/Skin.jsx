import { Banner } from "./Banner.jsx"
import { Products } from "./Products.jsx"
import { SkinBanner } from "./SkinBanner.jsx"
import { Navbar } from "./navbar.jsx";


export const Skin=()=>{
    return(
      <div>
      <Navbar/>
       <h3>The Pink Foundry (12)</h3>
      <SkinBanner/>
      <h3>All Products</h3>
     <Products/>
     </div>
     
    )
}