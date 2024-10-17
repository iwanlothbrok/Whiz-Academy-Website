import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; // React icons for star ratings
import Header from './Header';

const testimonials = [
    {
        id: 1,
        name: "Иван Иванов",
        position: "Frontend Developer",
        text: "Whiz Academy ми помогна да развия уменията си и да започна кариерата си като уеб разработчик. Обучението е насочено към реални проекти и задачи.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
    },
    {
        id: 2,
        name: "Мария Петрова",
        position: "Fullstack Developer",
        text: "Невероятни ментори и изключително полезни курсове! Благодарение на Whiz Academy успях да стана конкурентен на пазара на труда.",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 4,
    },
    {
        id: 3,
        name: "Георги Георгиев",
        position: "Backend Developer",
        text: "Whiz Academy предлага много практическо обучение. След като завърших курса, веднага намерих работа благодарение на уменията, които придобих.",
        image: "https://randomuser.me/api/portraits/men/43.jpg",
        rating: 5,
    }
];

const TestimonialsCarousel = () => {
    const [current, setCurrent] = useState(0);

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <>
            <Header
                titleText="Клиенти"
                descriptionText="Виж какво споделят нашите ученици за персонализираното обучение и подкрепата, която получиха:"
            />
            <div className="max-w-3xl mx-auto py-10 px-4 text-center bg-gray-950 rounded-lg ">

                {/* Testimonial Content */}
                <div className="relative overflow-hidden">
                    <motion.div
                        key={testimonials[current].id}
                        className="flex flex-col  items-center transition-opacity duration-500 ease-in-out"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        {/* Image of the Testimonial Giver */}
                        <img
                            src={testimonials[current].image}
                            alt={testimonials[current].name}
                            className="w-24 h-24 rounded-full mb-3 shadow-md"
                        />

                        {/* Testimonial Text */}
                        <blockquote className="bg-gray-100 rounded-lg p-2 shadow-sm max-w-2xl">
                            <p className="text-md italic text-gray-700 leading-relaxed">
                                “{testimonials[current].text}”
                            </p>
                            <footer className="mt-3">
                                <h5 className="font-bold text-lg text-gray-900">{testimonials[current].name}</h5>
                                <p className="text-gray-500">{testimonials[current].position}</p>

                                {/* Star Ratings */}
                                <div className="flex justify-center text-xl mt-2">
                                    {Array.from({ length: testimonials[current].rating }).map((_, index) => (
                                        <FaStar key={index} className="text-yellow-500" />
                                    ))}
                                </div>
                            </footer>
                        </blockquote>
                    </motion.div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center space-x-2 mt-6">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full cursor-pointer ${current === index ? 'bg-green-500' : 'bg-gray-400'}`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>

                {/* Next and Previous Buttons */}
                <div className="flex justify-between items-center mt-6">
                    <button
                        className="bg-green-500 text-white px-6 py-4 text-lg rounded-full hover:bg-green-600 focus:outline-none transition-all duration-300"
                        onClick={handlePrev}
                    >
                        Предишен
                    </button>
                    <button
                        className="bg-green-500 text-white px-6 py-5 text-lg rounded-full hover:bg-green-600 focus:outline-none transition-all duration-300"
                        onClick={handleNext}
                    >
                        Следващ
                    </button>
                </div>
            </div>
        </>
    );
};

export default TestimonialsCarousel;
