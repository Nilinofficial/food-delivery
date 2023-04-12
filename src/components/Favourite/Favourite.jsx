import "./Favourite.css"
import FavouriteCard from "./FavouriteCard"


const FavCards = [
    {
        id:1,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Cheese Burger",
        type:"Fresh Snack",
        starRating: "*****",
        rate : 200
    },
    {
        id:2,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:3,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:4,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta ",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:5,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:6,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:7,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:8,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:9,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:10,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:11,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    },
    {
        id:12,
        imageURL: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg",
        name:"Latina Pasta",
        type:"Fresh Vegetables",
        starRating: "****",
        rate : 170
    }
]

const Favourite = () => {



  return (
    <div className="favourite">
        <h3>Favourite</h3>
        <div className="FavouritesCard">

        {FavCards.map((favCard) => (
            <FavouriteCard {...favCard} key={favCard.id}/>
          ))}
        </div>

     

    </div>
  )
}

export default Favourite