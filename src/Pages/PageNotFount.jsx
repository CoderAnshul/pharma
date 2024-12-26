import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight, Pill } from 'lucide-react';

function PageNotFount() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 flex flex-col justify-center items-center md:w-1/2">
        <div className="max-w-md w-full">
          <Pill className="h-24 w-24 mb-8 animate-pulse mx-auto" />
          <h1 className="text-6xl font-bold mb-4 text-center">404</h1>
          <p className="text-2xl mb-8 text-center">Oops! Page Not Found</p>
          <div className="space-y-4">
            <Link to="/" className="w-full group bg-white text-blue-600 hover:bg-blue-100 p-3 text-center flex items-center justify-center">
              <Home className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Go to Home
            </Link>
            {/* <Link to="/search" className="w-full group bg-white text-blue-600 hover:bg-blue-100 p-3 text-center flex items-center justify-center">
              <Search className="mr-2 h-5 w-5 group-hover:animate-spin" />
              Search Medications
            </Link> */}
          </div>
        </div>
      </div>
      <div className="bg-white p-8 flex flex-col justify-center items-center md:w-1/2">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">We couldn't find that page</h2>
          <p className="text-gray-600 mb-8 text-lg">
            The page you're looking for might have been moved, deleted, or possibly never existed. 
            But don't worry, we're here to help you find what you need.
          </p>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Popular Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-blue-600 hover:text-blue-800 flex items-center group">
                    About Us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-blue-600 hover:text-blue-800 flex items-center group">
                    Contact Support
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-500">
              If you believe this is a technical error, please contact our support team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFount;
