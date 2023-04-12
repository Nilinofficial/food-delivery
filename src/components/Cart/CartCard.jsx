import React from 'react'
import "./CartCard.css"
import { IMAGE_URL } from '../../../Constant'
import { addItem, removeItem } from '../../../slices/cartSlice'
import { useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react'


const CartCard = (item) => {

  const dispatch =useDispatch();

  const handleAddItem = () => {
    console.log("clicked");
    dispatch(addItem(item))
  }

  return (
    <div className='cartCard'>
      <div className="cartCardBox">
     
      <div className="cartCardDetails">
      <img className='cartImage' src={`${IMAGE_URL}/${item?.card?.info?.imageId}`} />
      
      <div className='cartCardInfo'>
      <p>{item?.card?.info?.name}</p>
     
     {item?.card?.info?.defaultPrice?.toString().slice(0, 3) ? (
            <h5 >
              ₹{item?.card?.info?.defaultPrice?.toString().slice(0, 3)}
            </h5>
          ) : (
            <h5>
              ₹{item?.card?.info?.price?.toString().slice(0, 3)}{" "}
            </h5>
          )}
      </div>
      
             

           
      </div>
      <div className='cart__imp'>
      <div className='cartButtons'>
            <button 
        
        onClick={() => handleAddItem()}
        style={{width:"25px" ,height:"25px",margin:"2px", 
        backgroundColor:"#bf8245",border:"none",
        borderRadius:"2px",cursor:"pointer"
        }}>+</button>
         <p> {item?.stock}</p>


         {item.stock <=0 ?  <button 
      
         style={{width:"25px" ,height:"25px",margin:"2px", 
         backgroundColor:"#bf8245",border:"none",
         borderRadius:"2px",cursor:"pointer"
         }}
        >-</button>  :
        <button  
        onClick={() => dispatch(removeItem(item))}
         style={{width:"25px" ,height:"25px",margin:"2px", 
         backgroundColor:"#bf8245",border:"none",
         borderRadius:"2px",cursor:"pointer"
         }}
        >-</button>
        }
            </div>
             
     
        <p style={{display:"flex",alignItems:"center",fontSize:"12px",width:"100px"}}>Total Price {item?.card?.info?.defaultPrice?.toString().slice(0, 3) ? (
            <h6 style={{padding:"5px"}} >
              ₹ {parseInt(item?.card?.info?.defaultPrice?.toString().slice(0, 3)* item?.stock)}
            </h6>
          ) : (
            <h5 style={{padding:"5px"}} >
              ₹{parseInt(item?.card?.info?.price?.toString().slice(0, 3)* item?.stock)}
            </h5>
          )}</p> 
        </div>

      

      </div>


      
      
        </div>
  )
}

export default CartCard