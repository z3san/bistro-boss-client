import React from 'react';
import { Helmet  } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImage from "../../../assets/menu/banner3.jpg"
import dessertImage from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImage from "../../../assets/menu/pizza-bg.jpg"
import soupImage from "../../../assets/menu/soup-bg.jpg"
import saladImage from "../../../assets/menu/salad-bg.jpg"
import useMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {

    const [menu] = useMenu()
    const offered = menu.filter(item=>item.category=== 'offered')
    const desserts = menu.filter(item=>item.category=== 'dessert')
    const soup = menu.filter(item=>item.category=== 'soup')
    const salad = menu.filter(item=>item.category=== 'salad')
    const pizza = menu.filter(item=>item.category=== 'pizza')

    return (

        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImage} title={"our menu"}></Cover>
            {/* main cover */}
            <SectionTitle subHeading="Dont Miss Todays Offer!" heading="Todays Offer" />
            {/* Offered items */}
            <MenuCategory items={offered} />
            {/* Dessert Items */}
            <SectionTitle subHeading="" heading=""/>
            <MenuCategory items={desserts} img={dessertImage} title={"dessert"}/>
            <MenuCategory items={pizza} img={pizzaImage} title="pizza"  />
            <MenuCategory items={salad} img={saladImage} title="salad"  />
            <MenuCategory items={soup} img={soupImage} title="pizza"  />
          
           
        </div>
    );
    }

export default Menu;