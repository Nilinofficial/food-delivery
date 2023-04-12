import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Payasm from "./Payasam/Payasm";
import Recommended from "./Recommended/Recommended";
import "./RestaurantDetails.css";
import TopPicks from "./TopPicks/TopPicks";
import {Shimmerh3,ShimmerCuisines,ShimmerRating,ShimmerRecommended} from "../../Shimmer/Shimmer";
import {RESTAURANT_DETAILS_API} from '../../../../Constant'

const IMAGE_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill";
  const RestaurantDetails = () => {
    const [RestaurantData, setRestaurantData] = useState(null);
    const [MoreRestaurantData, setMoreRestaurantData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
      fetchRestauarantData();
    }, []);
  
   
    const fetchRestauarantData = async () => {
      const data = await fetch(
        `${RESTAURANT_DETAILS_API}${id}`
      );
      const json = await data.json();
      setRestaurantData(json?.data?.cards[0]?.card?.card?.info);
  
      setMoreRestaurantData(
        json?.data?.cards[json?.data.cards?.length - 1]?.groupedCard?.cardGroupMap
          ?.REGULAR?.cards
      );
    };
  
         return(
      <div className="restaurantDetails">
        <div className="restaurantDetails__main">
          <img
            className="details__image"
            src={`${IMAGE_URL}/${RestaurantData?.cloudinaryImageId}`}
            alt=""
          />
        </div>
        <div className="details__card">
          {RestaurantData?.name ?  <h3>{RestaurantData?.name}</h3> : <Shimmerh3/>}
         
          <p className="details__cuisines">
            {RestaurantData?.labels[2]?.message ? <>{RestaurantData?.labels[2]?.message}</> : <ShimmerCuisines/>}
          </p>
  
          <p className="details__cuisines">
            {RestaurantData?.avgRating ? <> Rating {RestaurantData?.avgRating}</> : <ShimmerRating/>}
           </p>
        </div>
        <div></div>
        {/* Recommended section */}
  
       
          <div className="details__recommended">
            {MoreRestaurantData[1]?.card?.card?.title ?  <h2>{MoreRestaurantData[1]?.card?.card?.title}</h2>  : <ShimmerRecommended/>}
           
           {
            MoreRestaurantData[1]?.card?.card? <>
            {MoreRestaurantData[1]?.card?.card?.itemCards?.map((item) => (
              <Recommended key={item?.card?.info?.id} {...item} />
            ))}
            </> :
            <div>
            {Array(10).fill("").map((e,index) => 
            (
              <Recommended key={index}/>
            )
            )}
            
            </div>
           }
  
            
          </div>
        
  
        {/* Top Picks */}
  
        {MoreRestaurantData[1]?.card?.card?.carousel && (
          <div className="details__topPicks">
            {/* <h2>{MoreRestaurantData[1]?.card?.card?.title}</h2> */}
            {MoreRestaurantData[1]?.card?.card?.carousel?.map((item) => (
              <TopPicks key={item?.dish?.info?.id} {...item} />
            ))}
          </div>
        )}
  
  
  {MoreRestaurantData[1]?.card?.card?.categories && <div className="details__Payasam">
            <h2>{MoreRestaurantData[1]?.card?.card?.categories[0]?.title}</h2>
            {MoreRestaurantData[1]?.card?.card?.categories[0].itemCards?.map((item) => (
              <Payasm key={item?.card?.info?.id} {...item} />
            ))}
          </div>
     }
      
      </div>
    );
  };
  
  export default RestaurantDetails;
  
