import "./Categories.css"
import Category from "./Category"

const Types = [
    {
        id:1,
        imageURL:"https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
        type:"Fast food"
    },{
        id:2,
        imageURL:"https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
        type:"Health food"
    },{
        id:3,
        imageURL:"https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
        type:"Fruits"
    },{
        id:4,
        imageURL:"https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
        type:"Vegetables"
    },{
        id:5,
        imageURL:"https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
        type:"Junk food"
    },
    {
        id:6,
        imageURL:"https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
        type:"Junk food"
    }
]

const Categories = () => {



  return (
    <div className="categories" >
        {Types.map((type) => (
          
             <Category {...type} key={type.id}/>
            
           
        ))}
     
    </div>
  )
}

export default Categories