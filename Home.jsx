import React from 'react';
import { Link } from 'react-router-dom';

const movies = [
  {
    id: 1,
    title: 'Inception',
    thumbnail: 'https://image.tmdb.org/t/p/w300/8s4h9friP6Ci3adRGahHARVd76E.jpg',
  },
  {
    id: 2,
    title: 'Interstellar',
    thumbnail: 'https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Film Populer</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="rounded overflow-hidden shadow-lg">
            <img src={movie.thumbnail} alt={movie.title} className="w-full" />
            <div className="p-2">
              <h2 className="text-lg font-semibold">{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
