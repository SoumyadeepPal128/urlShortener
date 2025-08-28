import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();

    return (
        <div className='w-full'>
            {label && (
                <label
                    htmlFor={id}
                    className='block mb-1 pl-1 text-sm font-medium text-gray-700 dark:text-gray-300'
                >
                    {label}
                </label>
            )}
            <input
            
                type={type}
                className={`w-full px-3 py-2 rounded-lg
                            bg-white dark:bg-gray-800
                            text-gray-900 dark:text-gray-100
                            outline-none
                            border border-gray-300 dark:border-gray-700
                            focus:border-blue-500 dark:focus:border-blue-500
                            focus:ring-blue-500 dark:focus:ring-blue-500 focus:ring-opacity-40
                            duration-200 ${className}`}
                ref={ref}
                id={id}
                {...props}
            />
        </div>
    );
});

export default Input;
