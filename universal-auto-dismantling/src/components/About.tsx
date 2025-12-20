import React from 'react';
import { Award, Clock, Users, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We provide high-quality vehicles, parts, and dismantling services with exceptional care and attention to detail.'
    },
    {
      icon: Clock,
      title: 'Reliability',
      description: 'Count on us for prompt service, accurate inspections, and dependable support when you need it most.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, becoming a trusted partner in their automotive needs.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest pricing, transparent communication, and ethical business practices guide everything we do.'
    }
  ];

  const stats = [
    { number: '8+', label: 'Years in Business' },
    { number: '1000+', label: 'Vehicles Processed' },
    { number: '24/7', label: 'Support Available' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Universal Auto Dismantling</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for used cars, auto parts, and professional dismantling services.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Founded in 2018, Universal Auto Dismantling started with a mission to provide reliable, affordable,
                and environmentally responsible services for used vehicles and auto parts. What began as a small
                local operation has grown into a trusted hub for car enthusiasts and businesses alike.
              </p>
              <p>
                Our team of certified technicians and automotive experts ensures every vehicle and part is inspected,
                refurbished, or dismantled responsibly. We are committed to offering safe, high-quality products
                while minimizing environmental impact.
              </p>
              <p>
                Today, we continue to expand our services and maintain our core values of integrity, reliability,
                and customer-first service that have made us a leader in the automotive dismantling industry.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Used cars in junkyard"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700">
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-500/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team CTA */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-blue-900/50 rounded-2xl p-12 text-center border border-gray-700">
          <h3 className="text-3xl font-bold text-white mb-4">Meet Our Expert Team</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our certified automotive experts and dismantling specialists are here to help you find the right
            vehicles, parts, or recycling solutions for your needs.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
