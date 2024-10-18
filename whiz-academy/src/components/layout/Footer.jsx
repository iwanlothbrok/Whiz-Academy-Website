import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">За Whiz Academy</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Whiz Academy е онлайн платформа, която предлага персонализирано обучение в програмиране. Нашите ментори ви помагат да развиете своите умения и да постигнете успех в IT индустрията.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Бързи връзки</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <a href="/" className="hover:text-green-400 transition-colors">
                                    Начало
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-green-400 transition-colors">
                                    За нас
                                </a>
                            </li>
                            <li>
                                <a href="/courses" className="hover:text-green-400 transition-colors">
                                    Курсове
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-green-400 transition-colors">
                                    Контакти
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Свържете се с нас</h3>
                        <p className="text-gray-400">
                            Email: info@whizacademy.com
                        </p>
                        <p className="text-gray-400">
                            Телефон: +359 123 456 789
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4 mt-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <FaFacebook size={24} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Whiz Academy. Всички права запазени.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
