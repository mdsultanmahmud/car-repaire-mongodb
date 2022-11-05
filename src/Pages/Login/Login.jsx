import React, { useContext, useState } from 'react';
import loginImg from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import { AuthContext } from '../../context/AuthProvider';
import getJwtToken from '../../utilities/auth';
const Login = () => {
    const [showStatus, setShowStatus] = useState(false)
    const {loginUser} = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || "/" 
    const navigate = useNavigate()
    const handleLogin = event =>{
        event.preventDefault() 
        const form = event.target 
        const email = form.email.value 
        const password = form.password.value 
        loginUser(email, password)
       
        .then(res =>{
            const user = res.user 
            const currentUser = {
                email: user?.email 
            }
            getJwtToken(currentUser)
            navigate(from, {replace: true})
            if(user.uid){
                toast.success('You are login successfully!!!')
                form.reset()               
            }
        })
        .catch(e => {
            console.log(e)
            toast.error(e.message)
        })
    }
    const handlePasswordShow = () =>{
        setShowStatus(!showStatus)
    }

    return (
        <div className="hero w-full bg-base-200">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center  lg:text-left">
                    <img className='w-3/4' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type={showStatus ? 'text' :'password'} placeholder="password" className="input input-bordered" />
                            <span onClick={handlePasswordShow} className='text-left text-sm lowercase cursor-pointer mt-2 ' >Show Password</span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='py-4 mx-auto'>Are you new here ?? Please <Link className='text-orange-600' to='/register'>create account!</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login; 