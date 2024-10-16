import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ href, onClick, children, className }) => (
    <li>
        <a
            href={href}
            onClick={onClick}
            className={`block px-4 py-2 hover:text-mainGreen font-medium ${className || ''}`}
        >
            {children}
        </a>
    </li>
);

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPhone, setIsPhone] = useState(false);
    const [isOnDetailsPage, setIsOnDetailsPage] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

    const dropdownRef = useRef(null);
    const productDropdownRef = useRef(null);
    const menuRef = useRef(null);

    const toggleProductDropdown = useCallback(() => {
        setIsProductDropdownOpen((prev) => !prev);
    }, []);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsPhone(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (
                productDropdownRef.current &&
                !productDropdownRef.current.contains(event.target)
            ) {
                setIsProductDropdownOpen(false);
            }
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isDropdownOpen || isMenuOpen || isProductDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen, isMenuOpen, isProductDropdownOpen]);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
        if (isMenuOpen) {
            setIsDropdownOpen(false);
            setIsProductDropdownOpen(false);
        }
    }, [isMenuOpen]);

    const handleDropdownToggle = useCallback(() => {
        setIsDropdownOpen((prev) => !prev);
        if (isPhone && !isDropdownOpen) {
            setIsMenuOpen(true);
        }
    }, [isPhone, isDropdownOpen]);

    return (
        <header
            className={`fixed top-0 left-0 z-40 w-full transition-all duration-500 ${isScrolled
                ? 'bg-gradient-to-b from-black via-gray-950 to-gray-900 shadow-md'
                : 'bg-transparent'
                }`}
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="relative flex items-center justify-between py-3 lg:py-5">
                    <div className="flex-shrink-0 w-28">
                        {!isOnDetailsPage ? (
                            <a href="/" className="block">
                                <img src="/navlogo.png" alt="logo" className="w-full" />
                            </a>
                        ) : (
                            <div className="w-28 mb-5"></div>
                        )}
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                            className="block lg:hidden px-3 py-2 focus:outline-none focus:ring-2 focus:ring-mainGreen"
                        >
                            <span className="block h-1 w-6 bg-white my-1"></span>
                            <span className="block h-1 w-6 bg-white my-1"></span>
                            <span className="block h-1 w-6 bg-white my-1"></span>
                        </button>
                        <nav
                            ref={menuRef}
                            className={`fixed top-0 left-0 w-full h-screen bg-gray-900 transform transition-transform duration-500 ease-in-out lg:relative lg:h-auto lg:w-auto lg:bg-transparent lg:transform-none ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                                } lg:translate-x-0`}
                        >
                            <div className="flex justify-end p-2 lg:hidden">
                                <button
                                    onClick={toggleMenu}
                                    aria-label="Close Menu"
                                    className="text-mainGreen font-bold text-3xl"
                                >
                                    ✕
                                </button>
                            </div>
                            <ul className="flex flex-col items-center justify-center text-white h-2/3 lg:flex-row lg:space-x-8">
                                <NavItem href="/">Home</NavItem>
                                <li className="relative group">
                                    <button
                                        onClick={toggleProductDropdown}
                                        className="text-white py-2 font-medium hover:text-mainGreen"
                                    >
                                        Products
                                    </button>
                                    {isProductDropdownOpen && (
                                        <div
                                            ref={productDropdownRef}
                                            className="absolute left-0 mt-2 w-44 bg-gray-800 rounded-lg shadow-lg z-50"
                                        >
                                            <ul className="py-2 text-sm text-gray-200 font-medium">
                                                <NavItem href="/products/cards">Cards</NavItem>
                                                <NavItem href="/products/reviews">Reviews</NavItem>
                                                <NavItem href="/products/all">All Products</NavItem>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <NavItem href="/features">Features</NavItem>
                                <NavItem href="/contact">Contact</NavItem>
                                <div className="lg:flex items-center ml-5 space-x-2 lg:space-x-3">
                                    <Link
                                        href="/login"
                                        className="px-6 py-3 text-lg font-semibold text-mainGreen bg-transparent border border-mainGreen rounded-full transition-all duration-300 hover:bg-mainGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mainGreen"
                                        onClick={() => setIsMenuOpen(true)}
                                    >
                                        Логин
                                    </Link>
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
