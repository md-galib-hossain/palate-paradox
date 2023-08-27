import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from "../../Shared/Cover/Cover"
import orderover from "./../../../assets/shop/banner2.jpg"
import { useState } from 'react';
import useMenu from '../../../hooks/useMenu';
import FoodCard from '../../../Components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
const Order = () => {
    const [tabIndex, SetTabIndex] = useState(0)
    const [menu] = useMenu()
    const {category} = useParams()
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
   <OrderTab item={salad}></OrderTab>
  </TabPanel>
  <TabPanel>
  <OrderTab item={pizza}></OrderTab>

  </TabPanel>
  <TabPanel>
  <OrderTab item={soup}></OrderTab>

  </TabPanel>
  <TabPanel>
  <OrderTab item={dessert}></OrderTab>

  </TabPanel>
  <TabPanel>
  <OrderTab item={drinks}></OrderTab>

  </TabPanel>
</Tabs>
</div>

    </div>
  )
}

export default Order