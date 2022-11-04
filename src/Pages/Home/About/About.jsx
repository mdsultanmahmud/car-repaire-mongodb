import React from 'react';
import personPic from '../../../assets/images/about_us/person.jpg'
import partsPic from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='w-1/2 relative md:mb-10'>
                <img src={personPic} className="ml-auto w-3/4 h-full rounded-lg shadow-2xl" />
                <img src={partsPic} className="w-1/2 border-2 border-red-800 absolute top-1/2 right-1/2 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-xl text-orange-600 font-bold    ">About Us</p>
                    <h1 className="text-4xl font-bold">
                        We are qualified <br />
                        & of experienced <br />
                        in this field
                    </h1>
                    <p className="py-6 capitalize">There are many Variation of passage of lorem ipsum available, but the majority have suffered alteration in some form, bu injected humous, or randomised words which don't lock even slightly believable.</p>
                    <p className="py-6 capitalize">the majority have suffered alteration in some form, bu injected humous, or randomised words which don't lock even slightly believable.</p>
                    <button className="btn btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;