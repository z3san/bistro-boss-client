import React from 'react';

const FoodCard = ({item}) => {

    const {name,image, price,recipe} = item

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <p className='absolute right-0 px-4 mr-4 mt-4 bg-slate-900 text-white'>${price}</p>
  <div className="card-body text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Add TO Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;