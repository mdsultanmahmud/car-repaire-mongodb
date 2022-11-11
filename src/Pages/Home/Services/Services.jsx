import React, { useEffect, useRef, useState } from 'react';
import ServicesItem from './ServicesItem';

const Services = () => {
    const [serciesItem, setServicesItem] = useState([])
    const [isAsc, setIsAscc] = useState(true)
    const [searchString, setSearchString] = useState('')
    const searchRef = useRef()
    useEffect(() => {
        fetch(`https://car-with-mongodb-server.vercel.app/services?search=${searchString}&order=${isAsc ? 'asc' : 'des'}`)
            .then(res => res.json())
            .then(data => setServicesItem(data))
    }, [isAsc, searchString])

    const serachHandling = () =>{
        setSearchString(searchRef.current.value)
    }
    console.log(searchString)
    return (
        <div>
            <div>
                <p className='text-orange-700 font-bold text-center'>Services</p>
                <h3 className='text-center font-bold text-3xl py-2'>Our Services Area</h3>
                <p className='text-center py-3 '>the majority have suffered alteration in some form, <br /> but injected humous, or randomised words which don't lock even slightly believable.</p>
                <div className='my-5 text-center'>
                    <input ref={searchRef} className='input bg-white' type="text" />
                    <button onClick={serachHandling} className='btn btn-primary ml-2'>Search</button>
                </div>
                <button onClick={() => setIsAscc(!isAsc)} className='my-4 btn btn-outline btn-secondary mx-auto block px-12'>{isAsc ? 'des' : 'asc'}</button>
            </div>
            <div className='grid gap-5 p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    serciesItem.map(item => <ServicesItem
                        key={item._id}
                        srItem={item}
                    ></ServicesItem>)
                }

            </div>
            <button className="btn btn-outline btn-secondary mx-auto my-8 block">More Services</button>
        </div>
    );
};

export default Services;