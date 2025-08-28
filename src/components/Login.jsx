import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import authService from '../appwrite/auth';
import { login as authLogin } from "../store/authSlice";
import { loginAndFetchUrls } from "../store/authThunks";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { Button } from "./index";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      await authService.forceLogout();
      const session = await authService.login(data);
      console.log(session);
      
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          dispatch(loginAndFetchUrls(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-gray-900 p-4 transition-colors duration-500">
      <div className="mx-auto w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl p-10 border border-black/10 dark:border-gray-700 shadow-lg transition-colors duration-500">
        <div className="mb-2 flex justify-center">
          {/* Optional: Add your logo */}
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60 dark:text-gray-400">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-blue-600 dark:text-blue-400 transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 dark:text-red-400 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="text-base font-medium text-gray-900 dark:text-gray-200"
              >
                Email Address
              </label>
              <Input
                label="email"
                type="email"
                className="mt-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border dark:border-gray-600"
                placeholder="Enter your email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  },
                })}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-base font-medium text-gray-900 dark:text-gray-200"
              >
                Password
              </label>
              <Input
                id="password"
                type="password"
                className="mt-2 bg-gray-50 dark:bg-gray-700 dark:text-gray-100 border dark:border-gray-600"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600 font-bold py-3 transition-colors duration-300"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
