import React from 'react';
import { ArrowRight, Star, Users, Wrench } from 'lucide-react';
import truckCarImage from '../assets/truckCar.jpeg';
import small1 from '../assets/16.jpeg';
import small2 from '../assets/18.jpeg';
import small3 from '../assets/19.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${truckCarImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {/* Main heading */}
        <div className="text-center lg:text-left space-y-4 text-white">
          <div className="text-left">
            <h1 className="font-bold leading-tight drop-shadow-lg inline-block text-center">
              <span className="block text-blue-400 text-6xl tracking-wider">UNIVERSAL</span>
              <span className="block text-blue-400 text-6xl">AUTO DISMANTLING</span>
              <span className="block text-blue-400 text-5xl mt-2">NEW & USED AUTO PARTS</span>
            </h1>
          </div>


          <p className="text-xl text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0 drop-shadow-md">
            Your one-stop destination for quality used cars, auto parts, and professional
            vehicle dismantling services.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-4 drop-shadow-md">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-200">8+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-gray-200">500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wrench className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-medium text-gray-200">24/7 Support</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4 drop-shadow-md">
            <a
              href="#contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 flex items-center justify-center space-x-2 group"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#services"
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 text-center"
            >
              View Services
            </a>
          </div>
        </div>

        {/* Small images full-width at bottom */}
        <div className="absolute bottom-0 left-0 w-full flex">
          <img src={small1} alt="Small 1" className="w-1/3 h-32 object-cover" />
          <img src={small2} alt="Small 2" className="w-1/3 h-32 object-cover" />
          <img src={small3} alt="Small 3" className="w-1/3 h-32 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
