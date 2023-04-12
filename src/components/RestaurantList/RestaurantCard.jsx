import { IMAGE_URL } from "../../../Constant";
import "./RestaurantCard.css";



const RestaurantCard = ({name,cloudinaryImageId,locality,avgRating,costForTwo,aggregatedDiscountInfo}) => {
 
  return (
    <div className="RestuarantCard">
 
<div className="restuarantCard__Container">
<img
  className="RestuarantCard__image"
  src={`${IMAGE_URL}/${cloudinaryImageId}`} alt="" />

    <div className="RestuarantCard__details">
        <h4>{name}</h4>
        <p className="Restuarant__location">{locality}</p>
  
        <p className="Restuarant__rating">Rating {avgRating}</p>
        

        <div className="Restuarant__offers">
        {aggregatedDiscountInfo?.header}
       </div>
    </div>
   
</div>

    <div className="restaurant__price">
       <p> {costForTwo.toString().slice(0,3)}rs</p>
    </div>


 

     
    </div>
  )
}

export default RestaurantCard