import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import {FaQuoteLeft } from "react-icons/fa"
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data)})
    },[])

    return (
        <section className='my-20'>
            <SectionTitle heading="Testimonials" subHeading="What our clients say" />
            
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
       
        {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center my-16 mx-24">
                  <FaQuoteLeft className="text-center text-7xl mb-10 font-bold"></FaQuoteLeft>
                <Rating
                  style={{ maxWidth: 250 }}
                  value={review.rating}
                  readOnly
                />
  
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-orange-400 ">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        
        
       
      </Swiper>
        </section>
    );
};

export default Testimonials;