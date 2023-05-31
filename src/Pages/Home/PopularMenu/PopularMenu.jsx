import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import useMenu from '../../../Hooks/UseMenu';

const PopularMenu = () => {

    const [menu] = useMenu()
    const popular  = menu.filter(item=> item.category === 'popular')

    return (
        <section className='mb-12'>
            <SectionTitle heading={"From our Menu"} subHeading={'Popular Items'} />
            <div className='grid md: grid-cols-2 gap-10'>
                {
                    popular.map(item=><MenuItems item={item} key={item._id} ></MenuItems>)
                }
            </div>
            <button className='btn btn-outline border-b-4'>View Full menu</button>
        </section>
    );
};

export default PopularMenu;