import React from 'react';

const CategoryBar = ({ selectedCategory, setSelectedCategory }) => {
  const dynamicCategories = ['Movies', 'Stream', 'Events'];
  const staticCategories = ['Plays', 'Sports', 'Activities'];
  const staticLinks = ['ListYourShow', 'Corporates', 'Offers', 'Gift Cards'];

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="overflow-x-auto">
          <div className="flex space-x-6 py-4 whitespace-nowrap">
           
            {dynamicCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm font-medium ${
                  selectedCategory === category
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
            
          
            {staticCategories.map((category) => (
              <button
                key={category}
                className="text-sm font-medium text-gray-600"
              >
                {category}
              </button>
            ))}
            
            
            {staticLinks.map((link) => (
              <button
                key={link}
                className="text-sm font-medium text-gray-600"
              >
                {link.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;

