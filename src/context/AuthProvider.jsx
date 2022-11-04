import React, { createContext, useEffect, useState } from 'react';

import {getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.init';
export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    const [createdStatus, setCreatedStatus] = useState(false)
    const googleProvider = new GoogleAuthProvider()
    // create an account with email and password 
    const createAccount = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile name 

    const userProfileUpdate = (profile) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    // login with email and password 
    const loginUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LoginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    // logout the user 
    const Logout = () =>{
        setLoading(true)
        localStorage.removeItem('token')
        return signOut(auth)
    }
    // check current user 
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) =>{
            if(currentUser){
                setLoading(false)
                console.log('current user: ', currentUser)
                setUser(currentUser)
            }else{
                setLoading(false)
                setUser({})
            }
        })

        return () => unsubscribe()
    } ,[createdStatus])
    const AuthInfo = {user,createdStatus, createAccount, 
        userProfileUpdate, loginUser, Logout, setCreatedStatus,loading, LoginWithGoogle
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;