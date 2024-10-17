import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = () => {
    return (
        <motion.div
            className="fixed top-1/2 right-0 transform -translate-y-1/2 group"
            initial={{ x: '50%' }}  // Initially more hidden on mobile
            animate={{ x: '55%' }}  // Stay further hidden for smaller screens
            whileHover={{ x: '0%' }}  // Fully visible on hover
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}  // Smooth spring animation
        >
            <motion.a
                href="/consultation"
                className="inline-block px-6 py-3 md:px-8 md:py-4 text-sm md:text-lg font-semibold text-white bg-red-500 border border-transparent rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-300"
                whileHover={{ scale: 1.1 }}  // Slightly enlarge the button on hover
                whileTap={{ scale: 0.95 }}  // Shrink slightly on click
            >
                Безплатна Консултация
            </motion.a>
        </motion.div>
    );
};

export default CTAButton;
