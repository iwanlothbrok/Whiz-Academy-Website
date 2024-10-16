import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-base font-semibold text-mainGreen tracking-wide uppercase">
            About Whiz Academy
          </h2>
          <p className="mt-2 text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl">
            Personalized Coding Lessons for Everyone
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            At Whiz Academy, we believe in empowering individuals through
            tailored, one-on-one coding lessons that help you reach your
            potential, no matter your starting point.
          </p>
        </div>

        {/* Content Section */}
        <div className="mt-10 sm:mt-12 lg:mt-16 flex justify-center">
          <div className="max-w-3xl">
            <img
              src="/assets/academy-image.jpg"
              alt="Whiz Academy"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <a
            href="/lessons"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-mainGreen hover:bg-mainGreen"
          >
            Start Your Coding Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
