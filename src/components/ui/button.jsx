import React, { forwardRef } from "react";
import clsx from "clsx";

export const Button = forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = 
      "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 " +
      "focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 " +
      "active:scale-95 transform";

    const variants = {
      default: 
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 " +
        "shadow-sm hover:shadow-md",
      destructive: 
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 " +
        "shadow-sm hover:shadow-md",
      outline: 
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 " +
        "focus:ring-blue-500 shadow-sm hover:shadow-md",
      secondary: 
        "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 " +
        "shadow-sm hover:shadow-md",
      ghost: 
        "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
      link: 
        "bg-transparent text-blue-600 hover:text-blue-700 underline-offset-4 " +
        "hover:underline focus:ring-blue-500",
      elegant: 
        "bg-gradient-to-r from-purple-600 to-blue-600 text-white " +
        "hover:from-purple-700 hover:to-blue-700 focus:ring-purple-500 " +
        "shadow-lg hover:shadow-xl",
      success: 
        "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 " +
        "shadow-sm hover:shadow-md",
      warning: 
        "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500 " +
        "shadow-sm hover:shadow-md",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-xs rounded-md",
      default: "px-4 py-2 text-sm rounded-md",
      lg: "px-6 py-3 text-base rounded-lg",
      xl: "px-8 py-4 text-lg rounded-xl",
      icon: "p-2 rounded-md",
      "icon-sm": "p-1.5 rounded-sm",
      "icon-lg": "p-3 rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={clsx(
          baseStyles,
          variants[variant] || variants.default,
          sizes[size] || sizes.default,
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";