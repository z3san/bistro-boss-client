import React from 'react';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';



const MenuCategory = ({items, title, img}) => {
    return (

      <div className='pt-8'>
        {title && <Cover img={img} title={title}/>}
          <div className='grid md: grid-cols-2 gap-10 my-16'>
        {
            items.map(item=><MenuItems item={item} key={item._id} ></MenuItems>)
        }
    </div>
      <Link to={`/order/${title}`}> <button className='btn btn-outline border-b-4'>Order Now</button></Link>
      </div>
    );
};

export default MenuCategory;