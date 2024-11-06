


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import MovieCard from './components/MovieCard';
import Carousel from './components/Carausel';

const App = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Movies');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (['Movies', 'Stream', 'Events'].includes(selectedCategory)) {
        try {
          let searchQuery = '';
          switch (selectedCategory) {
            case 'Movies':
              searchQuery = 'movie';
              break;
            case 'Stream':
              searchQuery = 'series';
              break;
            case 'Events':
              searchQuery = 'game';
              break;
            default:
              searchQuery = 'movie';
          }
          
          const response = await fetch(
            `https://www.omdbapi.com/?s=${searchQuery}&type=${searchQuery}&apikey=729e379d`
          );
          const data = await response.json();
          setMovies(data.Search || []);
        } catch (error) {
          console.error("Error fetching data:", error);
          setMovies([]);
        }
      } else {
        setMovies([]);
      }
    };
    
    fetchData();
  }, [selectedCategory]);

  const handleSearch = async () => {
    if (query.trim() && ['Movies', 'Stream', 'Events'].includes(selectedCategory)) {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=729e379d`);
        const data = await response.json();
        setMovies(data.Search || []);
      } catch (error) {
        console.error("Error fetching movies", error);
        setMovies([]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <CategoryBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Carousel />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <MovieCard movies={movies} category={selectedCategory} />
      </div>
    </div>
  );
};

export default App;