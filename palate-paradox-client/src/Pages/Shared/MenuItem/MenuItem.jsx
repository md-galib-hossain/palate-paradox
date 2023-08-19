
const MenuItem = ({item}) => {
    const {name,image,price,recipe} = item
  
  return (
    <div className="flex space-x-2">
        <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[100px] me-4" src={image} alt="" />
        <div>
            <h3 className="uppercase text-xl">{name} ------------</h3>
            <p className="text-base">{recipe}</p>
        </div>
        <p className="text-yellow-600">${price}</p>
    </div>
  )
}

export default MenuItem