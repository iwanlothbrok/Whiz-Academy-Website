import React, { useState } from 'react';
import Header from './Header';
const RegisterCTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        setFormSubmitted(true);
    };

    return (
        <section className="bg-gradient-to-b from-green-950 to-black text-white pt-6">
            <Header
                titleText="Запиши се за безплатна консултация"
                descriptionText="Разбери как персонализираното обучение на Whiz Academy може да те подготви за успешна кариера в IT. Запази своята консултация сега и получи индивидуален план за обучение."
            />
            <div className="max-w-lg mx-auto px-4">


                {!formSubmitted ? (
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-lg shadow-lg p-8 text-gray-800"
                    >
                        {/* Name Input */}
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Име
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Въведете вашето име"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Имейл
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Въведете вашия имейл"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-semibold mb-2"
                            >
                                Парола
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                placeholder="Въведете парола"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-800  text-white font-bold py-3 px-4 rounded-full transition-all duration-300"
                        >
                            Регистрирай се
                        </button>
                    </form>
                ) : (
                    <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            Благодарим ви за регистрацията!
                        </h3>
                        <p className="text-gray-600">
                            Скоро ще се свържем с вас за повече информация относно консултацията.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RegisterCTA;
