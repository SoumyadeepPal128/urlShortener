import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
    const navigate=useNavigate();
  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
            
            <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                        Connecting the world, one link at a time.
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                        We believe in the power of simplicity. Long, cumbersome URLs are a thing of the past. Welcome to the future of link sharing.
                    </p>
                </div>

                {/* Main Content Section */}
                <div className="mt-16 space-y-12">
                    {/* Our Mission */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Our goal is to provide a fast, simple, and reliable tool to shorten long URLs, making them easier to share, remember, and track. In a digital world cluttered with information, we bring elegance and efficiency to your links. Whether you're a marketer, a content creator, or just sharing a link with a friend, our service is designed for you.
                        </p>
                    </div>

                    {/* Why Choose Us? */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Choose Us?</h2>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Fast & Simple</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">Get your shortened URL in seconds with our intuitive and clean interface.</p>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Reliable & Secure</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">Our robust infrastructure ensures your links are always available and secure.</p>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Track Your Links</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">Gain insights with click tracking to understand your audience better.</p>
                            </div>
                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Gemini-Powered Summaries</h3>
                                <p className="mt-2 text-gray-600 dark:text-gray-400">Instantly understand any link's content with AI-powered summaries, a unique feature of our service.</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Call to Action */}
                    <div className="text-center pt-8">
                         <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Ready to get started?</h2>
                         <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                            Create your first short link today and experience the difference.
                        </p>
                        <div className="mt-6">
                            <button onClick={()=>navigate("/add-url")} className="inline-block px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                Shorten a URL
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About