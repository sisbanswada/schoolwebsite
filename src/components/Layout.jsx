import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNavItem, setActiveNavItem] = useState('Home'); // State for active nav item
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Academics',
            path: '/academics',
            // subItems: ['Curriculum', 'Faculty', 'Results']
        },
        {
            name: 'Extra Curricular',
            path: '/extra-curricular',
            // subItems: ['Sports', 'Arts', 'Clubs']
        },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact Us', path: '/contact' }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 bg-gray-900`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-3 bg-slate-50 rounded-2xl">
                            <img
                                className="h-16 w-auto"
                                src="/school_logo1.png"
                                alt="School Logo"
                            />
                            <img
                                className="h-12 w-auto"
                                src="/name.png"
                                alt="Sunshine International School"
                            />
                            {/* <p className="text-lg font-medium">Sunshine International School</p> */}
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className={`relative group ${activeNavItem === item.name ? 'bg-blue-600 rounded-md' : ''}`} // Conditional styling
                                >
                                    <button
                                        onClick={() => {
                                            setActiveNavItem(item.name);
                                            navigate(item.path);
                                        }} // Set active item
                                        className="text-white  hover:text-pink-400 font-medium flex items-center px-3 py-2"
                                    >
                                        {item.name}
                                        {item.subItems && (
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        )}
                                    </button>

                                    {item.subItems && (
                                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                            <div className="py-1">
                                                {item.subItems.map((subItem) => (
                                                    <a
                                                        key={subItem}
                                                        href="/"
                                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        {subItem}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-blue-600"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
                        } overflow-hidden bg-gray-900`
                    }
                // className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'
                // } overflow-hidden bg-white`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navItems.map((item) => (
                            <div key={item.name}>
                                <a
                                    onClick={() => {
                                        navigate(item.path); // Navigate programmatically
                                        setIsMenuOpen(false); // Optionally close the mobile menu
                                    }}
                                    className={`block px-3 py-2 text-base font-medium rounded-md ${pathname === item.path ? 'text-white bg-blue-600' : 'text-white'
                                        }`}
                                >
                                    {item.name}
                                </a>
                                {item.subItems && (
                                    <div className="pl-4">
                                        {item.subItems.map((subItem) => (
                                            <a
                                                key={subItem}
                                                href="/"
                                                className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                                            >
                                                {subItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Address */}
                        <div className="space-y-4">
                            <img
                                className="h-72 w-auto"
                                src="/school_logo2.png"
                                alt="Sunshine International School Logo"
                            />
                            <p className="text-gray-400 text-sm">
                                Empowering students to shine bright and achieve their dreams.
                            </p>
                        </div>

                        {/* Location */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Our Location</h3>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li className="flex items-center space-x-3">
                                    <MapPin className="h-5 w-5 text-gray-400" />
                                    <span>
                                        NGO's Colony, Banswada <br />
                                        Dist: Kamreddy <br />
                                        State: Telangana - 503187
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-gray-400" />
                                    <span>+91 90638 08828, +91 83418 04341</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Mail className="flex-shrink-0 h-5 w-5 text-gray-400 mt-1" />
                                    <span className="break-words">
                                        sunshineinternationalschool22@gmail.com
                                    </span>
                                </li>

                            </ul>
                            <div className="mt-4">
                                <iframe
                                    title="Google Maps Location of Sunshine International School"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786.218122907579!2d77.8781444!3d18.3829213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce810f9f1b5887%3A0xa22c16d3dfc079d4!2sSunshine%20international%20school!5e0!3m2!1sen!2sin!4v1735317947412!5m2!1sen!2sin"
                                    width="100%"
                                    height="150"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg shadow-lg"
                                ></iframe>
                            </div>
                        </div>

                        {/* Quick Links */}
                        {/* <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            // href={item.path}
                                            className="hover:text-white transition-colors"
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        {/* Social Media */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                {/* Instagram */}
                                <a href="https://www.instagram.com/ssisbanswada" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram className="text-pink-500 w-6 h-6 hover:scale-110 transition-transform" />
                                </a>

                                {/* Facebook */}
                                <a href="https://www.facebook.com/profile.php?id=100082965777198" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <Facebook className="text-blue-500 w-6 h-6 hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} Sunshine International School. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
