import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50 backdrop-blur-sm bg-gray-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Left: contact info */}
        <div className="flex flex-col justify-center text-gray-300 space-y-1">
          <a
            href="https://www.google.com/maps/place/5534+Duarte+St,+Los+Angeles,+CA+90058"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 flex items-center space-x-1"
          >
            <MapPin className="w-4 h-4" />
            <span>5534 Duarte St, Los Angeles, CA 90058</span>
          </a>
          <a href="tel:3235893219" className="hover:text-blue-400 flex items-center space-x-1">
            <Phone className="w-4 h-4" />
            <span>323-589-3219</span>
          </a>
          <a href="mailto:uadinco@gmail.com" className="hover:text-blue-400 flex items-center space-x-1">
            <Mail className="w-4 h-4" />
            <span>uadinco@gmail.com</span>
          </a>
        </div>

        {/* Right: horizontal menu + Facebook */}
        <div className="flex items-center space-x-6">
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Facebook icon */}
          <a
            href="https://www.facebook.com/Universalautodismantling?sfnsn=wa&mibextid=RUbZ1f"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hidden md:flex"
          >
            <Facebook className="w-5 h-5" />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-800">
          <nav className="flex flex-col space-y-4 px-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-blue-400 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            {/* Mobile contact info */}
            <div className="flex flex-col text-gray-300 space-y-1">
              <a
                href="https://www.google.com/maps/place/5534+Duarte+St,+Los+Angeles,+CA+90058"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 flex items-center space-x-1"
              >
                <MapPin className="w-4 h-4" />
                <span>5534 Duarte St, Los Angeles, CA 90058</span>
              </a>
              <a
                href="tel:3235893219"
                className="hover:text-blue-400 flex items-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span>323-589-3219</span>
              </a>
              <a
                href="mailto:uadinco@gmail.com"
                className="hover:text-blue-400 flex items-center space-x-1"
              >
                <Mail className="w-4 h-4" />
                <span>uadinco@gmail.com</span>
              </a>
              <a
                href="https://www.facebook.com/Universalautodismantling?sfnsn=wa&mibextid=RUbZ1f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 hover:text-blue-400"
              >
                <Facebook className="w-4 h-4 text-blue-600 hover:text-blue-800" />
                <span>Facebook</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
