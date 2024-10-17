import React from 'react';
import { motion } from 'framer-motion';

export default function Header({ titleText, descriptionText }) {
    return (
        <div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -10 },
                }}
                transition={{ duration: 0.8 }}
                className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100 mb-6 space-y-4 text-center"
            >


                {/* Dynamic Title Text */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -10 },
                    }}
                    transition={{ duration: 0.7 }}
                    className="text-2xl font-semibold text-white sm:text-3xl"
                >
                    {titleText}
                </motion.h1>

                {/* Dynamic Description Text */}
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: -10 },
                    }}
                    transition={{ duration: 0.8 }}
                    className="text-md text-gray-200 font-semibold sm:text-xl"
                >
                    {descriptionText}
                </motion.p>
            </motion.div>
        </div>
    );
}
