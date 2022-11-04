import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Orders = () => {
    const { user ,Logout} = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    const [deleteStatus, setDeleteStatus] = useState(false)
    let count = 1
    const uri = `https://car-with-mongodb-server.vercel.app/orders?email=${user.email}`
    useEffect(() => {
        fetch(uri, {
            headers:{
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res =>{
                if(res.status === 401){
                    return Logout()
                }
                return  res.json()
            })
            .then(data => {
                setOrders(data)
                
            }) 
    }, [user?.email, deleteStatus, Logout])



    // delete item 
    const handleDelete = (id) => {
        const agreed = confirm('Do you want to delete this item parmanently?')
        if (agreed) {
            fetch(`https://car-with-mongodb-server.vercel.app/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        toast.success('You delete this product successfully!!')
                        setDeleteStatus(!deleteStatus)
                    }
                })
        }
    }

    // update item 

    const handleUpdate = (id) => {
        console.log('updated item', id)
    }
    return (
        <div>
            <h2 className='text-center text-secondary text-2xl font-semibold my-5'>
                {
                    orders.length>0 ? 
                    `All orders: ${orders.length}` 
                    :
                    'You have no orders. Please order something'
                }
            </h2>
            {
                orders.length > 0 &&
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Customer Name</th>
                                <th>Phone</th>
                                <th>Service Name</th>
                                <th>Service Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr key={order._id}>
                                    <td>{count++}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.serviceName}</td>
                                    <td>${order.price}</td>
                                    <td>
                                        <button onClick={() => handleDelete(order._id)} className="btn btn-outline btn-secondary">Cancel</button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default Orders;