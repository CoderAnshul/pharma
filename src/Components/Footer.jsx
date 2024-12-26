import React from "react";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import twitter from "../assets/images/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-sky-100 to-sky-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-wrap justify-between gap-8">
        {/* Logo and Description */}
        <div className="flex-1 max-w-56">
          <h2 className="text-xl font-bold">LOGO</h2>
          <p className="mt-4 text-sm">
            We deliver premium APIs with top certifications like ISO 9001:2015, WHO-GMP, and USFDA, ensuring quality, safety, and reliability for the pharmaceutical industry.
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <a href="#" className="p-2 bg-cyan-700 text-white rounded-full hover:bg-cyan-800 hover:rotate-[360deg] transition-all">
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-cyan-700 text-white rounded-full hover:bg-cyan-800 hover:rotate-[360deg] transition-all">
              <img src={twitter} alt="Twitter" className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-cyan-700 text-white rounded-full hover:bg-cyan-800 hover:rotate-[360deg] transition-all">
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 bg-cyan-700 text-white rounded-full hover:bg-cyan-800 hover:rotate-[360deg] transition-all">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 max-w-56">
          <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-700">Home</a></li>
            <li><a href="#" className="hover:text-cyan-700">About us</a></li>
            <li><a href="#" className="hover:text-cyan-700">Contact us</a></li>
            <li><a href="#" className="hover:text-cyan-700">Products</a></li>
            <li><a href="#" className="hover:text-cyan-700">Services</a></li>
          </ul>
        </div>

        {/* Popular Products */}
        <div className="flex-1 max-w-64">
          <h3 className="text-lg font-semibold mb-4">Popular Products</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-700">Example prod 1</a></li>
            <li><a href="#" className="hover:text-cyan-700">Example prod 2</a></li>
            <li><a href="#" className="hover:text-cyan-700">Example prod 3</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex-1 max-w-48">
          <h3 className="text-lg font-semibold mb-4">Mail Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="mailto:info@company.co.in" className="hover:text-cyan-700">info@company.co.in</a></li>
            <li><a href="mailto:info@company.co.in" className="hover:text-cyan-700">info@company.co.in</a></li>
          </ul>
          <h3 className="text-lg font-semibold mt-6 mb-4">Contact Us</h3>
          <p className="text-sm hover:text-cyan-700">(+91) 2829892983</p>
        </div>
      </div>

      <div className="text-gray-600 py-4 text-center text-sm">
        All rights reserved || Company
      </div>
    </footer>
  );
};

export default Footer;
