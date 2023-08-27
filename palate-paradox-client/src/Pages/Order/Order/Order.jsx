import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Shared/Cover/Cover"
import orderover from "./../../../assets/shop/banner2.jpg"
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
const Order = () => {
    const [tabIndex, SetTabIndex] = useState(0)
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const drinks = menu.filter(item => item.category === "drinks")
  return (
    <div>
        <Cover img={orderover} title={"Order Food"}></Cover>
        <div className='max-w-screen-xl mx-auto'>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => SetTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drink</Tab>
  </TabList>
  <TabPanel>
   <div className='grid md:grid-cols-3 gap-4 place-items-center'>
   {salad.map((item)=>
    <FoodCard key={item._id} item={item}></FoodCard>
    )}
   </div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-4 place-items-center'>

  {pizza.map((item)=>
    <FoodCard key={item._id} item={item}></FoodCard>
    )}
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-4 place-items-center'>

  {soup.map((item)=>
    <FoodCard key={item._id} item={item}></FoodCard>
    )}
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-4 place-items-center'>

  {dessert.map((item)=>
    <FoodCard key={item._id} item={item}></FoodCard>
    )}
    </div>
  </TabPanel>
  <TabPanel>
  <div className='grid md:grid-cols-3 gap-4 place-items-center'>

  {drinks.map((item)=>
    <FoodCard key={item._id} item={item}></FoodCard>
    )}
    </div>
  </TabPanel>
</Tabs>
</div>

    </div>
  )
}

export default Order