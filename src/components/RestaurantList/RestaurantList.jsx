import { useState,useEffect } from "react"
import "./RestaurantList.css"
import RestaurantCard from "./RestaurantCard"
import { MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import ShimmerRestaurant from "./ShimmerRestaurant";
import { Link } from "react-router-dom";
import useOnline from '../hooks/useOnline'

const RestaurantList = () => {
  const [search,setSearch] = useState("");
  const [allRestaurantData,setAllRestaurantData] = useState([])
  const [filteredRestaurantData,setFilteredRestauarantData] = useState([])

   const isOnline = useOnline()
 

 
 const filterData = (allRestauarantData,search) => {
 
     const result =    allRestauarantData.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(search?.toLowerCase()))  ;
    setFilteredRestauarantData(result)
    }
 
useEffect(() => {
     fetchRestaurants()  
},[])


const changeFn = (e) => {
  setSearch(e.target.value);
  filterData(allRestaurantData, e.target.value)
}

async function fetchRestaurants() {
 try{
  const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.59822395951696&lng=76.58520620316267&page_type=DESKTOP_WEB_LISTING")
  const json= await data.json();
  setFilteredRestauarantData(json?.data?.cards[2]?.data?.data.cards);
  setAllRestaurantData(json?.data?.cards[2]?.data?.data.cards)
 }catch(err) {
 console.error(err);
 } }

 if(!isOnline) return <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
 <WifiIcon style={{width:"28px"}}/>
 <h1> Check your internet connection</h1>
 </div>
  return allRestaurantData?.length===0 ? 
  
   <div className="restuarantList">

<div className="search">
 <div className="search__box">
        <MagnifyingGlassIcon className="search__icon" onClick={() => filterData(allRestaurantData,search)}/>
        <input onChange={changeFn} value={search} type="text" className="search_input" />   
        </div>
 </div>


          <div className="restuarant__listCard">

            {Array(9).fill("").map((e,index) => (
              <ShimmerRestaurant key={index}/>
            )) }
             
            
            </div>
          
         
    </div>

  
  :  (
    <div className="restuarantList">
 {/* onChange={(e) => {setSearch(e.target.value)}} */}

 <div className="search">
 <div className="search__box">
        <MagnifyingGlassIcon className="search__icon" onClick={() => filterData(allRestaurantData,search)}/>
        <input onChange={changeFn} value={search} type="text" className="search_input" />   
        </div>
 </div>


          <header className="restaurantList__header">
               <h3>More restuarants</h3>
               <p>See all</p>
          </header>

            {filteredRestaurantData?.length ===0 && <div > Your search term doesn't matches with any restaurants... </div>}

      <div className="restuarant__listCard">
         {filteredRestaurantData?.map(restaurant => (
        <Link className="restaurant__link" key={restaurant.data.id} to = {`/restaurant/${restaurant.data.id}`}>
        <RestaurantCard   {...restaurant.data} />
        </Link>
        ))}
      </div>      
    </div>
  )
}

export default RestaurantList




