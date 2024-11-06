


import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const MovieCard = ({ movies, category }) => {
  const [moviesWithDetails, setMoviesWithDetails] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const detailedMovies = await Promise.all(
        movies.map(async (movie) => {
          try {
            const response = await fetch(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=729e379d`
            );
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Error fetching movie details:", error);
            return movie;
          }
        })
      );
      setMoviesWithDetails(detailedMovies);
    };

    if (movies.length > 0) {
      fetchMovieDetails();
    }
  }, [movies]);

  if (!movies.length) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold mb-2">Recommended {category}</h2>
        <p className="text-gray-500">Search for movies to see results here</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recommended {category}</h2>
        <button className="text-red-500 text-sm">See All ›</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {moviesWithDetails.map((movie) => {
          const rating = movie.imdbRating ? parseFloat(movie.imdbRating) : 0;
          const votes = movie.imdbVotes
            ? `${(parseInt(movie.imdbVotes.replace(/,/g, '')) / 1000).toFixed(1)}K Votes`
            : "N/A";

          return (
            <div key={movie.imdbID} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative aspect-[2/3]">
                <img
                  src={movie.Poster !== 'N/A' ? movie.Poster : '/api/placeholder/300/450'}
                  alt={movie.Title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-1 text-sm mb-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span>{rating > 0 ? `${rating}/10` : 'N/A'}</span>
                  <span className="text-gray-500 text-xs">{votes}</span>
                </div>
                <h3 className="font-medium mb-1 line-clamp-1">{movie.Title}</h3>
                <p className="text-sm text-gray-500">
                  {movie.Genre ? movie.Genre.split(', ').slice(0, 3).join('/') : movie.Type}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;