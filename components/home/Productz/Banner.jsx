import Carousel from 'react-material-ui-carousel'
import { bannerData } from '../../constant/data'
import { makeStyles } from '@material-ui/core'


const useStyle = makeStyles({
   image:{
       width:'100%',
       height:280,
   } ,
   carousel:{
       marginTop:10
   }
})
 export const Banner=()=>{
     const classes = useStyle();
    return(
        <Carousel 
        autoPlay={true}
        animation='slide'
       
        cycleNavigation={true}
        navButtonsProps={{
            style:{
                background:'#FFFFFF',
                color:'#494949',
                corderRadius:0,
                margin:0
            }
        }}
        className = {classes.carousel}
        >
        
        {
            bannerData.map(image =>(
                 <img src={image} className={classes.image} />
            ))
        }
    </Carousel>
   

    )
  
}
