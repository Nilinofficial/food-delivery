import "./FavouriteCard.css"


const FavouriteCard = ({imageURL,name,type,starRating,rate}) => {
  return (
    <div className="favouriteCard">
         <img className="favouriteCard__image" src={imageURL} alt=""  />
      <p className="favouriteCard__name">{name}</p>
      <p className="favouriteCard__type">{type}</p>


      <div className="favouriteCard__bottom">
       <p > {starRating}</p>
        <p> RS{rate}</p>
      </div>
    </div>
  )
}

export default FavouriteCard