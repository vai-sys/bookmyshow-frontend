



import React, { useState } from 'react';
import { Search, MapPin, Menu, ChevronDown, X } from 'lucide-react';

const Navbar = ({ query, setQuery, onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
      setShowSearch(false);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
         
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 md:hidden" />
            <span className="text-xl font-bold text-red-500">BookMyShow</span>
           
          </div>

      
          <div className="hidden md:flex flex-1 max-w-2xl mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="w-full px-4 py-2 rounded-md bg-gray-100"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}
            </div>
          </div>


          <div className="hidden md:flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Gurugram</span>
              <ChevronDown className="h-4 w-4" />
            </div>

         
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium bg-red-500 text-white p-2 rounded-md">Sign In</button>
          </div>

        

    
          <div className="md:hidden">
            <button onClick={() => setShowSearch(!showSearch)}>
              <Search className="h-6 w-6" />
            </button>
          </div>
        </div>

        
        {showSearch && (
          <div className="md:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies, events..."
                className="w-full px-4 py-2 rounded-md bg-gray-100"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

