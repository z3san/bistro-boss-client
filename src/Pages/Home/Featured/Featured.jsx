import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item bg-fixed  text-white pt-8 my-20'>
            <SectionTitle heading={'Featured Item'} subHeading={"Check it out"} />
            <div className='md:flex items-center justify-center pb-20 px-36 bg-slate-500 bg-opacity-40'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10 '>
                    <p>Aug 2025</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quaerat quidem consequatur earum labore excepturi aspernatur! Facere consequatur perferendis accusamus temporibus cupiditate officia fuga libero saepe similique mollitia fugit excepturi, ipsa, obcaecati, in sunt voluptatibus quibusdam sint veniam eveniet. Magni praesentium eveniet explicabo quas nostrum ullam quasi illo, nesciunt nihil.</p>
                    <button className='btn btn-outline border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;