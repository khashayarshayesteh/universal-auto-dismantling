import React from 'react';
import { ArrowRight, MapPin, Phone, Star, Users, Wrench } from 'lucide-react';
import outsideImage from '../assets/outside.jpeg'; // Replace with the actual path to your image
import truckCarImage from '../assets/truckCar.jpeg';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                
              <h3 className="font-bold text-center leading-tight">
                <span className="block text-7xl tracking-wider -mb-1 text-blue-400">
                  Universal
                </span>
                <span className="block text-6xl text-blue-400">
                  Auto Dismantling
                </span>
              </h3>

              </h1>
              <p className="text-lg text-gray-400">
                <MapPin className="inline h-5 w-5 text-blue-400 mr-2" />
                <a
                  href="https://www.google.com/maps?q=5534+Duarte+St,+Los+Angeles,+CA+90058"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  5534 Duarte St, Los Angeles, CA 90058
                </a>
              </p>
              <p className="text-lg text-gray-400">
                <Phone className="inline h-5 w-5 text-blue-400 mr-2" />
                <a
                  href="tel:+13235893219"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  (323) 589-3219
                </a>
              </p>
            </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                    Your one-stop destination for quality used cars, auto parts, and professional
                    vehicle dismantling services.
              </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-300">8+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-gray-300">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium text-gray-300">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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

          {/* Image */}
          <div className="relative">
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
                <img
                  src={truckCarImage}
                  alt="Universal Auto Dismantling"
                  className="w-full h-96 object-cover rounded-lg"
                />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-center">
                <a
                  href="#contact"  // replace with your actual target link
                  className="absolute -top-4 -right-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg flex flex-col items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm">Support</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;