import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const PopularMenu = () => {

    const [menu, setMenu] = useState([])
    useEffect(()=>{
        fetch('/menu.json').then(res=>res.json()).then(data=>{
            const popularItems  = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
            
        })
    },[])

    return (
        <section className='mb-12'>
            <SectionTitle heading={"From our Menu"} subHeading={'Popular Items'} />
            <div className='grid md: grid-cols-2 gap-10'>
                {
                    menu.map(item=><MenuItems item={item} key={item._id} ></MenuItems>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;