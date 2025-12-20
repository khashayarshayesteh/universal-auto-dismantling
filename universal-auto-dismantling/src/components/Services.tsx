import React from 'react';
import {
  Car,
  Truck,
  Wrench,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: 'Sell Your Junk Car',
      description:
        'We buy junk, damaged, and non-running vehicles for top cash prices.',
      features: [
        'Instant cash offers',
        'We buy all makes & models',
        'Any condition accepted',
        'Same-day pickup available'
      ],
      color: 'blue'
    },
    {
      icon: Wrench,
      title: 'Used Auto Parts',
      description:
        'Quality tested used and salvaged auto parts at affordable prices.',
      features: [
        'Engines & transmissions',
        'Body parts & accessories',
        'OEM used parts',
        'Warranty available'
      ],
      color: 'green'
    },
    {
      icon: Truck,
      title: 'Towing & Vehicle Removal',
      description:
        'Fast and reliable towing service for junk cars and unwanted vehicles.',
      features: [
        'Free towing',
        'Licensed & insured',
        'Local & long-distance pickup',
        'Environmentally responsible disposal'
      ],
      color: 'purple'
    }
  ];

  const iconColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'bg-green-500/20 text-green-400';
      case 'purple':
        return 'bg-purple-500/20 text-purple-400';
      default:
        return 'bg-blue-500/20 text-blue-400';
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We specialize in junk car buying, auto dismantling,
            and quality used auto parts with fast and reliable service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
              >
                <div
                  className={`inline-flex p-3 rounded-xl ${iconColor(
                    service.color
                  )} mb-6`}
                >
                  <IconComponent className="h-8 w-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="flex items-center space-x-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 group"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Turn Your Old Car Into Cash</h3>
          <p className="text-xl mb-8 opacity-90">
            Call us today for fast quotes, free towing, and same-day service.
          </p>
          <a
            href="#contact"
            className="bg-white text-blue-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;
