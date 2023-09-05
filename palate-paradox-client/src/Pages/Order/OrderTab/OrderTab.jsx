import FoodCard from "../../../Components/FoodCard/FoodCard"


// TODO: Implement Pagination here
const OrderTab = ({item}) => {
  return (
    <div className='grid md:grid-cols-3 gap-10 place-items-center'>
    {item.map((item)=>
     <FoodCard key={item._id} item={item}></FoodCard>
     )}
    </div> 
  )
}

export default OrderTab