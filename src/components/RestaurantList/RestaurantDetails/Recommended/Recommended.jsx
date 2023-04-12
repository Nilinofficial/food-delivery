import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../../../../../Constant";
import {
  ShimmerCategory,
  Shimmerh1,
  Shimmerprice,
} from "../../../Shimmer/Shimmer";
import "./Recommended.css";
import { addItem, removeItem } from "../../../../../slices/cartSlice";
import { useState } from "react";


const Recommended = (item) => {
  const dispatch = useDispatch();

  const [count,setCount] = useState(0)

  const handleAddItem = () => {
    setCount(count+1)
    dispatch(addItem(item));
  }

  const hanldeRemoveItem = () => {
    if(count>0) {
      dispatch(removeItem(item));
    }
    setCount(count-1)
    
    if(count<=0){
      setCount(0)
    }
  }

  return (
    <div className="recommended">
      <div className="recommended__Data">
        {item?.card?.info?.name ? (
          <h2>{item?.card?.info?.name}</h2>
        ) : (
          <Shimmerh1 />
        )}

        {item?.card?.info?.defaultPrice || item?.card?.info?.price ? (
          <>
            {item?.card?.info?.defaultPrice?.toString().slice(0, 3) ? (
              <p className="recommendedData__price">
                ₹{item?.card?.info?.defaultPrice?.toString().slice(0, 3)}
              </p>
            ) : (
              <p className="recommendedData__price">
                ₹{item?.card?.info?.price?.toString().slice(0, 3)}{" "}
              </p>
            )}
          </>
        ) : (
          <>
            <Shimmerprice />
          </>
        )}
        {item?.card?.info?.category ? (
          <>
            <p className="recommendedData__category">
              Category : {item?.card?.info?.category}
            </p>
          </>
        ) : (
          <ShimmerCategory />
        )}
      </div>

      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <img src={`${IMAGE_URL}/${item?.card?.info?.imageId}`} />
        <div style={{padding:"5px",display:"flex",alignItems:"center"}}>
        <button 
        
        onClick={() => handleAddItem()}
        style={{width:"25px" ,height:"25px",margin:"2px", 
        backgroundColor:"#bf8245",border:"none",
        borderRadius:"2px",cursor:"pointer"
        }}>+</button>
       <p>{count}</p>
        <button 
         onClick={() => hanldeRemoveItem()}
         style={{width:"25px" ,height:"25px",margin:"2px", 
         backgroundColor:"#bf8245",border:"none",
         borderRadius:"2px",cursor:"pointer"
         }}
        >-</button>
       </div>
      </div>
 

      

    </div>
  );
};

export default Recommended;
