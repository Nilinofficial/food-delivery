import "./Category.css"

const Category = ({type,imageURL}) => {

  return (
    <div className='category'  >
        <img className="category__image" src={imageURL} alt="" />
<p >{type}</p>
        
    </div>
  )
}

export default Category