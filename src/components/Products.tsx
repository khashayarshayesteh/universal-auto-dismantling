import React from 'react';

const Products = () => {
  const categories = [
    {
      title: 'Used Cars',
      description: 'High-quality pre-owned vehicles for every budget.',
      features: ['Inspected & certified', 'Affordable pricing', 'Variety of models', 'Warranty available'],
      image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=800' // car lot
    },
    {
      title: 'Auto Parts',
      description: 'Genuine and aftermarket car parts to keep your vehicles running smoothly.',
      features: ['Engine components', 'Suspension & brakes', 'Electrical parts', 'Interior & exterior accessories'],
      image: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=800' // car parts
    },
    {
      title: 'Vehicle Dismantling',
      description: 'Professional dismantling and recycling of vehicles in an eco-friendly manner.',
      features: ['Safe removal', 'Recycling & scrap', 'Parts resale', 'Environmental compliance'],
      image: 'https://images.pexels.com/photos/159134/pexels-photo-159134.jpeg?auto=compress&cs=tinysrgb&w=800' // junkyard
    },
    {
      title: 'Truck Services',
      description: 'Maintenance, repair, and parts for trucks of all sizes.',
      features: ['Heavy-duty trucks', 'Parts & repairs', 'Fleet support', 'Expert technicians'],
      image: 'https://images.pexels.com/photos/2808899/pexels-photo-2808899.jpeg?auto=compress&cs=tinysrgb&w=800' // truck service
    }
  ];

const brands = [
  {
    name: 'Honda',
    logo: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Toyota',
    logo: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Ford',
    logo: 'https://images.pexels.com/photos/9599606/pexels-photo-9599606.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    name: 'Chevrolet',
    logo: 'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];



  return (
    <section id="products" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We provide top-quality vehicles, parts, and professional dismantling services for all types of cars and trucks.
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Trusted Brands We Carry</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center border border-gray-700"
              >
                <div className="w-20 h-20 mb-3">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-lg font-bold text-gray-300">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">Need Assistance?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Our team will help you find the right vehicles, parts, or dismantling services to meet your needs.
            </p>
            <a
              href="#contact"
              className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
