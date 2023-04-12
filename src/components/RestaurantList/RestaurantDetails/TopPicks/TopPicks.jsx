import { IMAGE_URL } from "../../../../../Constant";
import { Shimmerh1 } from "../../../Shimmer/Shimmer";
import "./TopPicks.css"




const TopPicks = (item) => {
    console.log("item",item);
  return (
    <div className="top">
    <div className="top__Data">
   
    {item?.dish?.info?.name ? <h2>{item?.dish?.info?.name}</h2> : <Shimmerh1/> }


    {item?.dish?.info?.defaultPrice?.toString().slice(0,3) ?
   <p className="topData__price">₹{item?.dish?.info?.defaultPrice?.toString().slice(0,3)}</p> : 
   <p className="topData__price">₹{item?.dish?.info?.price?.toString().slice(0,3)} </p> 
   }
    
    <p className="topData__category">Category : {item?.dish?.info?.category}</p>
    </div>


     <div>
     <img src={`${IMAGE_URL}/${item?.dish?.info?.imageId}`}/>
     </div>
              
               
 </div>
  )
}

export default TopPicks