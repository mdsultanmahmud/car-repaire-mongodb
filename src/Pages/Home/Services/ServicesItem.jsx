import React from 'react';
import { Link } from 'react-router-dom';
const ServicesItem = ({ srItem }) => {
    const { title, img, price, description
    } = srItem
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img}  alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-orange-700 font-semibold'><strong>Price: </strong> ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${srItem._id}`}><button className="btn btn-outline btn-secondary">Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesItem;