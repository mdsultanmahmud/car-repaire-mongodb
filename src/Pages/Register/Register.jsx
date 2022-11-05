import React, { useContext, useState } from 'react';
import registerImg from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast'
import { FaGoogle, FaGithub } from 'react-icons/fa';
import getJwtToken from '../../utilities/auth';
const Register = () => {
    const [showStatus, setShowStatus] = useState(false)
    const { createAccount, userProfileUpdate, setCreatedStatus, createdStatus, LoginWithGoogle,loginWithGithub } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const profile = {
            displayName: name
        }
        createAccount(email, password)
            .then(res => {
                const user = res.user
                if (user.uid) {
                    toast.success('You have created an account succefully!!!')
                    const currentUser = {
                        email: user?.email 
                    }
                    getJwtToken(currentUser)
                }
                userProfileUpdate(profile)
                    .then(res => {
                        // console.log(res.user)
                        setCreatedStatus(!createdStatus)
                        navigate('/')
                    })
                    .catch(e => {
                        console.log(e)
                    })
                console.log(user)
                form.reset()
            })
            .catch(e => {
                console.log(e)
                toast.error(e.message)
            })
    }

    // change password input type 
    const handlePasswordShow = () => {
        setShowStatus(!showStatus)
    }

    const handleGoogleLogin = () => {
        LoginWithGoogle()
            .then(res => {
                toast.success('Successfully Login!!')
                const currentUser = {
                    email: res.user?.email
                }
                getJwtToken(currentUser)
                navigate('/')
            })
            .catch(e => {
                console.log(e)
                toast.error(e.message)
            })
    }

    const handleGithubLogin = () =>{
        loginWithGithub()
        .then(res => {
            toast.success('Successfully Login!!')
            const currentUser = {
                email: res.user?.email
            }
            getJwtToken(currentUser)
            navigate('/')
        })
        .catch(e => {
            console.log(e)
            toast.error(e.message)
        })
    }
    


    return (
        <div className="hero w-full bg-base-200 ">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center  lg:text-left">
                    <img className='w-3/4' src={registerImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-4xl font-bold text-center text-secondary">Create Account</h1>
                    <form onSubmit={handleRegister} className="card-body p-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input required name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>
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
                            <input required name='password' type={showStatus ? 'text' : 'password'} placeholder="password" className="input input-bordered" />
                            <span onClick={handlePasswordShow} className='text-left text-sm lowercase cursor-pointer mt-2 ' >Show Password</span>
                        </div>
                        <div className="form-control mt-3 ">
                            <button type='submit' className="btn btn-secondary">Register</button>
                        </div>
                    </form>
                    <span className='text-center font-bold'>or</span>
                    <hr />
                    <div className='flex justify-center mt-5'>
                        <FaGoogle onClick={handleGoogleLogin} className='text-4xl font-bold mr-4 cursor-pointer'></FaGoogle>
                        <FaGithub onClick={handleGithubLogin} className='text-4xl font-bold cursor-pointer'></FaGithub>
                    </div>
                    <p className='py-4 mx-auto'>Have you an account?? Please <Link className='text-orange-600' to='/login'>Login!</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Register;