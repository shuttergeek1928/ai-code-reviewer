import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png" // Replace with your logo image path
            alt="Logo"
            className="h-8 mr-2"
          />
          <span className="text-white text-lg font-semibold">YourSite</span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center">
            <li className="ml-4">
              <a href="#" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li className="ml-4">
              <a href="#" className="text-white hover:text-gray-300">About</a>
            </li>
            <li className="ml-4">
              <a href="#" className="text-white hover:text-gray-300">Services</a>
            </li>
            <li className="ml-4">
              <a href="#" className="text-white hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
