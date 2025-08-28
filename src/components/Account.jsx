import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import authService from '../appwrite/auth';
import {logout as authLogout} from "../store/authSlice"
import { useNavigate } from 'react-router-dom';


function Account() {
    const navigate=useNavigate();
    const userData=useSelector((state)=> state.auth.userData.userData);
    console.log(userData);
    const dispatch=useDispatch();
    const logout= async ()=>{
        try {
            await authService.logout();
            dispatch(authLogout())
            navigate("/")
        } catch (error) {
            console.log(error.message);
            
        }
    }
    
  return (
    <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative">
            
            <div className="max-w-md mx-auto">
                <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg p-8 transition-colors duration-300">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            Your Account
                        </h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Manage your account details below.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Name</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-2">
                                {userData.name}
                            </p>
                        </div>

                        {/* Email Field */}
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-2">
                                {userData.email}
                            </p>
                        </div>
                    </div>

                    {/* Logout Button */}
                    <div className="mt-10">
                        <button
                            onClick={()=>logout()}
                            className="w-full px-4 py-3 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-300"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Account