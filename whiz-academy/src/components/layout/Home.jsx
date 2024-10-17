import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import homeImg from '../../assets/homePage.jpg'
export const Home = () => {
    // const [isImageLoaded, setIsImageLoaded] = useState(false);
    // const sectionRef = useRef < HTMLDivElement > (null);


    return (
        <section
            className="relative w-full h-screen bg-cover bg-center"
            style={{
                backgroundImage: `url(${homeImg})`,
                transition: 'background-image 0.5s ease-in-out',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 pt-52 bg-black bg-opacity-80" />

            {/* Content */}
            <div className="relative z-10 flex flex-col left-0 items-center justify-center h-full text-center text-white px-4">
                {/* Animated Title */}
                <motion.h1
                    className="text-3xl md:text-5xl  font-extrabold underline mb-4 leading-tight"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className='text-mainGreen '>ТВОЕТО БЪДЕЩЕ  </span>В ПРОГРАМИРАНЕТО
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-xl font-medium md:text-2xl mb-8 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >

                    <span className='text-mainGreen'>Индивидуално обучение и проекти, </span>
                    съобразени с търсенето на пазара,  за да бъдеш
                    <span className='text-mainGreen'> готов за успех още от първия ден.</span>
                </motion.p>


                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col md:flex-row gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <a href="/contact">
                        <button className="bg-mainGreen text-white px-9 py-5 rounded-full text-lg font-semibold shadow-lg hover:bg-mainGreen hover:bg-opacity-80 transition-transform transform hover:scale-105 focus:outline-none">
                            ЗАПАЗИ КОНСУЛТАЦИЯ
                        </button>
                    </a>
                    <a href="/features">
                        <button className="bg-transparent border-2 border-white text-white px-9 py-5 rounded-full text-lg font-semibold shadow-lg hover:bg-gray-200 hover:text-black transition-transform transform hover:scale-105 focus:outline-none">
                            РЕГИСТРИРАЙ СЕ
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
