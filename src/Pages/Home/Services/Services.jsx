import React, { useEffect, useState } from 'react';
import ServicesItem from './ServicesItem';

const Services = () => {
    const [serciesItem, setServicesItem] = useState([])
    useEffect(() =>{
        fetch('https://car-with-mongodb-server.vercel.app/services')
        .then(res => res.json())
        .then(data => setServicesItem(data))
    } ,[])
    return (
        <div>
            <div>
                <p className='text-orange-700 font-bold text-center'>Services</p>
                <h3 className='text-center font-bold text-3xl py-2'>Our Services Area</h3>
                <p className='text-center py-3 '>the majority have suffered alteration in some form, <br /> but injected humous, or randomised words which don't lock even slightly believable.</p>
            </div>
            <div className='grid gap-5 p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    serciesItem.map(item => <ServicesItem 
                        key={item._id}
                        srItem = {item}
                    ></ServicesItem>)
                }
                
            </div>
            <button className="btn btn-outline btn-secondary mx-auto my-8 block">More Services</button>
        </div> 
    );
};

export default Services;