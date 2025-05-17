import React from 'react';
import { useParams } from 'react-router-dom';

const movieData = {
  1: {
    title: 'Inception',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    description: 'Film tentang mimpi dalam mimpi dengan aksi luar biasa.',
  },
  2: {
    title: 'Interstellar',
    videoUrl: 'https://www.w3schools.com/html/movie.mp4',
    description: 'Petualangan luar angkasa untuk menyelamatkan umat manusia.',
  },
};

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movieData[id];

  if (!movie) return <p>Film tidak ditemukan.</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
      <p className="mb-4">{movie.description}</p>
      <video controls className="w-full rounded-lg">
        <source src={movie.videoUrl} type="video/mp4" />
        Browser Anda tidak mendukung video.
      </video>
    </div>
  );
}
