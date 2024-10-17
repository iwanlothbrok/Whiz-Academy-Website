import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaBriefcase, FaClock } from 'react-icons/fa';
import Header from './Header'
import CTAButton from '../CTAButton';
function Features() {
    const services = [
        {
            icon: <FaUserGraduate className="text-green-400 mb-4 group-hover:text-white transition-colors duration-300" size={52} />, // Icon hover effect
            title: 'Индивидуално обучение с ментор',
            description: (
                <>
                    Получаваш <strong className="font-bold text-white">персонално внимание</strong> от ментор, който създава учебен план, съобразен с твоите конкретни умения и цели. Независимо дали си начинаещ или имаш известен опит, менторът ти помага да напредваш по-бързо и да се фокусираш върху области, които ще те направят <strong className="font-bold text-white">конкурентоспособен</strong> на пазара.
                </>
            ),
            delay: 0.2,
        },
        {
            icon: <FaClock className="text-green-400 mb-4 group-hover:text-white transition-colors duration-300" size={52} />, // Icon hover effect
            title: 'Гъвкав график и онлайн достъп',
            description: (
                <>
                    Учи на своето темпо, без стрес и без ограничения. С Whiz Academy можеш да създадеш учебен график, който да се вписва в твоя живот, с <strong className="font-bold text-white">онлайн достъп</strong> от всяка точка и <strong className="font-bold text-white">по всяко време</strong>.
                </>
            ),
            delay: 0.8,
        },
        {
            icon: <FaBriefcase className="text-green-400 mb-4 group-hover:text-white transition-colors duration-300" size={52} />, // Icon hover effect
            title: 'Реални проекти от индустрията',
            description: (
                <>
                    Работиш върху проекти, които не са просто академични – те са базирани на <strong className="font-bold text-white">реални предизвикателства</strong> от IT индустрията. Тези практически проекти те подготвят директно за работа и ти дават увереност за <strong className="font-bold text-white">реални задачи</strong> и интервюта.
                </>
            ),
            delay: 0.5,
        },

    ];

    return (
        <div className="relative bg-gradient-to-b from-black to-green-950 py-16">
            <div className="container mx-auto text-center px-4 lg:px-8">


                <Header
                    titleText="Успей с Whiz Academy"
                    descriptionText="Трансформирай уменията си с персонализирано обучение и практически опит. Започни своя път в IT индустрията с подкрепата на ментори и реални проекти, които ти дават предимство от самото начало."
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="relative group bg-gray-800 p-10 rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-3 flex flex-col items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: service.delay, duration: 0.6 }}
                        >
                            {/* Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-green-800 to-teal-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

                            {/* Icon */}
                            <div className="relative z-10">{service.icon}</div>

                            {/* Title */}
                            <h5 className="text-2xl text-white font-bold mb-4 relative z-10">{service.title}</h5>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed text-center relative z-10">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
