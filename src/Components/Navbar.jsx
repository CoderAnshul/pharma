import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  const linksRef = useRef([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Access the current route

  useEffect(() => {
    // Scroll event listener for the / route only
    if (location.pathname === "/") {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setIsScrolled(true); // Always scrolled for other routes
    }
  }, [location.pathname]);

  useEffect(() => {
    // GSAP animation for links
    gsap.fromTo(
      linksRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2, // Delay between each link animation
      }
    );
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`flex fixed w-full mx-auto top-0 z-[1000] items-center md:px-14 lg:px-20 justify-between px-8 py-4 h-[70px] shadow-md transition-all duration-300 ${
        location.pathname === "/" && !isScrolled
          ? "bg-transparent text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <div className="text-xl font-bold">LOGO</div>
      </Link>

      {/* Navigation Links */}
      <ul className="md:flex hidden space-x-6 text-sm font-medium">
        {[ 
          { path: "/", label: "HOME" },
          { path: "/about-us", label: "ABOUT US" },
          { path: "/products", label: "PRODUCTS" },
          // { path: "/services", label: "SERVICES" },
          { path: "/contact-us", label: "CONTACT US" },
        ].map((navItem, index) => (
          <li key={index} ref={(el) => (linksRef.current[index] = el)}>
            <Link
              to={navItem.path}
              className={`transition ${
                location.pathname === navItem.path
                  ? "text-blue-500"
                  : "hover:text-blue-500"
              }`}
            >
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
