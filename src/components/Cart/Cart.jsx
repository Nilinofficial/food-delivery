import { useSelector } from "react-redux"
import "./Cart.css"
import CartCard from "./CartCard";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    const item = cartItems?.map((item,index) => item )
      
  const grandTotal = cartItems.reduce((total, item) => {
    const price = item?.card?.info?.defaultPrice
      ? parseInt(item.card.info.defaultPrice.toString().slice(0, 3))
      : parseInt(item.card.info.price.toString().slice(0, 3));

    return total + price * item.stock;
  }, 0);


  return (
    <div>
        {
            cartItems?.map((item,index) => (
                <CartCard {...item} key={index}/>
            ))
        }

       <div style={{display:"flex",bottom:"0px",float:"right",margin:"25px"}}>
        <p>
        Total Price : 
       <span style={{margin:"2px",fontWeight:"bold"}}>
       {grandTotal}
       </span>
        </p>
      
       </div>
    </div>
  )
}

export default Cart