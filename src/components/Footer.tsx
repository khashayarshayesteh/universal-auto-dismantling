import React from 'react';
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const services = [
    'Sell Junk Cars',
    'Used Auto Parts',
    'Auto Dismantling',
    'Vehicle Towing',
    'Scrap Car Removal',
    'Cash for Cars'
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Inventory', href: '#products' },
    { name: 'Contact', href: '#contact' },
    { name: 'Get a Quote', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Universal Auto Dismantling</h3>
                <p className="text-gray-400 text-sm">Used & Salvage Auto Parts</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Universal Auto Dismantling specializes in junk cars, auto dismantling,
              and quality used auto parts. Fast service, fair prices, and reliable support.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>5534 Duarte St</p>
                  <p>Los Angeles, CA 90058</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">(323) 589-3219</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300">uadinco@gmail.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Mon – Fri: 8AM – 5PM</p>
                  <p>Saturday: 8AM – 3PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call To Action */}
        <div className="mt-12 bg-blue-500 rounded-lg p-6 text-center">
          <h4 className="text-xl font-bold mb-2">Sell Your Junk Car Today</h4>
          <p className="mb-4">Call now for fast quotes and same-day service.</p>
          <a
            href="tel:+13235893219"
            className="bg-white text-blue-500 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Call (323) 589-3219
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Universal Auto Dismantling. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
