import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
    const status=useSelector((state)=> state.auth.status)
    const navigate=useNavigate();
  return (
<div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative flex items-center justify-center text-center overflow-hidden">
            {/* Background decorative shapes */}
            <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-blue-200 dark:bg-blue-900/50 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/50 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

            

            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 z-10">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-6xl md:text-7xl">
                        Simple, Fast, Reliable.
                    </h1>
                    <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Transform long, messy links into short, memorable URLs. Perfect for sharing on social media, in emails, or anywhere you need a clean link.
                    </p>
                </div>

                {/* Call to Action Button */}
                <div className="mt-10">
                    <button
                        onClick={()=>navigate(status?"/add-url":"/login")}
                        className="inline-block px-10 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transform hover:scale-105 transition-transform duration-300 shadow-lg"
                    >
                        Shorten URL
                    </button>
                </div>
            </div>
        </div>
  )
}

export default Home