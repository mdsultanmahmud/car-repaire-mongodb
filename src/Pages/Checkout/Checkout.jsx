import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Checkout = () => {
    const { title, price, _id } = useLoaderData()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const confirmOrder = event => {
        event.preventDefault()
        const form = event.target
        const name = `${form.firstName.value} ${form.LastName.value}`
        const email = form.email.value
        const phone = form.phone.value
        const message = form.message.value
        const orderedItem = {
            services: _id,
            serviceName: title,
            price,
            customerName: name,
            email,
            phone,
            message
        }

        fetch('https://car-with-mongodb-server.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedItem)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data)
                if (data.acknowledged) {
                    toast.success('Ordered Succefull!!')
                    form.reset()
                    navigate('/')
                }
            })

    }

    return (
        <div>
            <h3 className='text-2xl text-secondary text-center my-5'>Please Checkout <span className='text-bold text-2xl text-red-600'>{title}</span> <strong>(${price})</strong></h3>
            <form onSubmit={confirmOrder} className='p-5 my-6'>
                <div className='my-8 grid grid-cols-1 md:grid-cols-2'>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <label className="input-group">
                            <span>First Name</span>
                            <input required type="text" name='firstName' placeholder="first name(required)" className="input input-bordered  w-3/5" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <label className="input-group">
                            <span>Last Name</span>
                            <input type="text" name='LastName' placeholder="last name" className="input input-bordered w-3/5" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <label className="input-group">
                            <span>Your Email</span>
                            <input type="text"  name='email' readOnly defaultValue={user?.email} placeholder="info@site.com(required)" className="input input-bordered w-3/5" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Phone</span>
                        </label>
                        <label className="input-group">
                            <span>Your Phone</span>
                            <input required type="text" name='phone' placeholder="+880***(required)" className="input input-bordered w-3/5" />
                        </label>
                    </div>
                </div>
                <textarea name='message' className="textarea textarea-error w-3/4 mx-auto block min-h-[200px]" placeholder="Your message"></textarea>
                <button type='submit' className="btn btn-outline btn-secondary block mx-auto my-4">Confirm Order</button>
            </form>
        </div>
    );
};

export default Checkout;