import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import authService from '../appwrite/auth';
import { login as authLogin } from "../store/authSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input  from "./Input"; // Assumes Input component can take a className
import { Button } from "./index"; // Assumes Button component can take a className

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const signup=async (data)=>{
        try {
            const userData= await authService.createAccount(data);
            if(userData){
                const session=await authService.getCurrentUser();
                if(session){
                    dispatch(authLogin(session));
                    navigate("/");
                }
            }
        } catch (error) {
            throw(error);
            console.log(error.message);
            setError(error.message)
            
        }
    }
    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-300">
    <div className="mx-auto w-full max-w-md bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-md transition-colors duration-300">
        <div className="mb-4 flex justify-center">
            {/* Optional: Add your logo here */}
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            Create a new account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Already have an account?&nbsp;
            <a
                href="#"
                onClick={(e) => { e.preventDefault(); navigate("/login"); }}
                className="font-medium text-blue-600 transition-all duration-200 hover:underline dark:text-blue-500"
            >
                Sign In
            </a>
        </p>

        {error && <p className="text-red-600 dark:text-red-500 mt-6 text-center">{error}</p>}

        <form onSubmit={handleSubmit(signup)} className='mt-8'>
            <div className='space-y-5'>
                <div>
                    <Input
                        label="Full Name:"
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: "Full name is required",
                        })}
                    />
                    {error.name && <p className="text-red-600 dark:text-red-500 mt-1 text-sm">{error.name.message}</p>}
                </div>

                <div>
                    <Input
                        label="Email Address:"
                        type="email"
                        placeholder="Enter your email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                                message: "Email address must be a valid address"
                            }
                        })}
                    />
                    {error.email && <p className="text-red-600 dark:text-red-500 mt-1 text-sm">{error.email.message}</p>}
                </div>

                <div>
                    <Input
                        label="Password:"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long"
                            }
                        })}
                    />
                    {error.password && <p className="text-red-600 dark:text-red-500 mt-1 text-sm">{error.password.message}</p>}
                </div>

                <Button type="submit" className="w-full">
                    Create Account
                </Button>
            </div>
        </form>
    </div>
</div>

    )
}

export default SignUp