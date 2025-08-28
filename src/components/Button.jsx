import React from 'react';

function Button({
    children,
    type = 'button',
    className = '', // Corrected prop name from 'classname' to 'className'
    ...props
}) {
    return (
        // The ...props are spread directly onto the button element,
        // not inside the className string.
        <button
            type={type}
            className={`px-4 py-2 rounded-lg font-semibold text-white shadow-md 
                        bg-blue-600 hover:bg-blue-700 
                        dark:bg-blue-500 dark:hover:bg-blue-600 
                        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 
                        transition-colors duration-200 ease-in-out
                        ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
