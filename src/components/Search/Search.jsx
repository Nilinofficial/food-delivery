import { useState } from "react"
import "./Search.css"
import { MagnifyingGlassIcon} from '@heroicons/react/24/solid'

const Search = () => {

  const [search,setSearch] = useState("");
  const [restaurantData,setRestauarantData] = useState()


  return (
    <div className="search">
        <div className="search__box">
        <MagnifyingGlassIcon className="search__icon" onClick={() => filterData(Restuarants,search)}/>
        <input onChange={(e) => {setSearch(e.target.value)}} value={search} type="text" className="search_input" />   
        </div>
        
    </div>
  )
}

export default Search