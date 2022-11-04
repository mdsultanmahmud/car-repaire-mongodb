import React from 'react';
import './Banner.css'
const CarouselItem = ({ slider }) => {
    const { image, id, prev, next } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='banner-img'>
                <img src={image} className="w-full rounded-xl" />
            </div>
            <div className="hidden  absolute md:flex    transform -translate-y-1/2 left-20 top-1/4">
                <h1 className='text-6xl md:text-4xl text-white font-bold'>
                    Affordable <br />
                    Price for Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex  w-2/5  transform -translate-y-1/2 left-20 top-1/2">
                <p className='text-white text-sm md:text-xl'>There are many variations of passages of available, but the majority have suffered alteration in some form.</p>
            </div>
            <div className="absolute hidden md:flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-outline btn-secondary mr-2">Discover More</button>
                <button className="btn btn-outline btn-accent">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>

    );
};

export default CarouselItem;