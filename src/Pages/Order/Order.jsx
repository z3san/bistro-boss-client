import React, { useState } from "react";
import orderCover from "../../assets/shop/order.jpg";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/UseMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
const {category} = useParams()

const initialIndex = categories.indexOf(category)
console.log(initialIndex);
const [tabIndex, setTabIndex] = useState(initialIndex)
const [menu] = useMenu()

const desserts = menu.filter(item=>item.category=== 'dessert')
const soup = menu.filter(item=>item.category=== 'soup')
const salad = menu.filter(item=>item.category=== 'salad')
const pizza = menu.filter(item=>item.category=== 'pizza')
const drinks = menu.filter(item=>item.category=== 'drinks')
   

  return (
    <div>
       <Helmet>
        <title>Bistro | Order Food</title>
      </Helmet>
      <Cover img={orderCover} title="Order Food" />

<Tabs defaultIndex={tabIndex} onSelect={(index) => {
    setTabIndex(index)
}}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
           <OrderTab items={salad}/>
        </TabPanel>

        <TabPanel>
        <OrderTab items={pizza}/>
        </TabPanel>

        <TabPanel>
   <OrderTab items={soup}/>
        </TabPanel>

        <TabPanel>
        <OrderTab items={desserts}/>
        </TabPanel>

        <TabPanel>
   <OrderTab items={drinks}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
