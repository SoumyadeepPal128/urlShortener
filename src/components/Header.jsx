import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Logo  from "../components/Logo"
import ThemeButton from "../components/ThemeButton"


function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    const navLinks = [
        {
            name: "Home",
            slug: "/",
            active: true,
        },
        {
            name: "Shorten Url",
            slug: "/add-url",
            active: authStatus,
        },
        {
            name: "My Urls",
            slug: "/my-urls",
            active: authStatus,
        },
        {
            name: "About",
            slug: "/about",
            active: true,
        },
    ]

    return (
        <div>
            <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <Logo />
                            </Link>
                        </div>
                        <nav className="hidden md:flex items-center">
                            <ul className="flex items-center space-x-2">
                                {navLinks.map((item) =>
                                    item.active ? (
                                        <li key={item.name}>
                                            <button
                                                onClick={() => navigate(item.slug)}
                                                className="px-4 py-2 rounded-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                                            >
                                                {item.name}
                                            </button>
                                        </li>
                                    ) : null
                                )}
                            </ul>
                        </nav>
                        <div className="flex items-center space-x-4">
                        <ThemeButton />
                        <button
                            onClick={() => navigate(authStatus ? "/account" : "/login")}
                            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                        >
                            {authStatus ? "Account" : "Login/SignUp"}
                        </button>
                    </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header