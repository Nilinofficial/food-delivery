import "./ShimmerRestaurant.css"



const ShimmerRestaurant = () => {
  return (
    <div className="shimmerRestaurant">
    <div className="shimmerCard">
 
<div className="shimmerCard__Container">
<div className="shimmerCard__image">

</div>

    <div className="shimmerCard__details">
        <h4></h4>
        <p className="shimmer__location"></p>
  
        <p className="shimmer__rating"></p>
        

        <div className="shimmer__offers">
        
       </div>
    </div>
   
</div>

  
</div>
<div className="shimmer__price">
    
    </div>
    </div>
  )
}

export default ShimmerRestaurant



{/* <div style={{display :"flex"}}>
 <div className="shimmer__Container">
      <Skeleton animation="wave" variant="rectangular" width={100} height={60} sx={{borderRadius:"5px"}} />
</div>
        
<div className="shimmer__details">
<Skeleton animation="wave" height={20} width={100}  />
<Skeleton animation="wave" height={15} width={70}  />  
<Skeleton animation="wave" height={10} width={50}  />  
    </div>
    </div>
    <div className="shimmer__price">
    <Skeleton animation="wave" height={10} width={20}  />  
    </div> */}
