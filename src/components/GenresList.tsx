import React, { useEffect, useState } from 'react'
import ApiClient from '../services/api-client'

interface Genre {
    id: number;
    name: string;
    image_background: string;
}

interface FetchGenresResponse {
    results: Genre[];
}

const GenresList = () => {
    const [genresList, setGenresList] = useState<Genre[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);

        // Fetch genres from the API and update the state
        ApiClient.get<FetchGenresResponse>("/genres")
            .then(response => {
                console.log(response.data);
                setGenresList(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching genres:", error);
                setError("Failed to fetch genres");
            })
            .finally(() => {
                // Set loading state to false
                setLoading(false);
            })
    }, []);
    
  return (
    <>
        {genresList.map((genre) => (
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-50 text-indigo-900 font-medium transition-colors group" key={genre.id}>

                <img className="w-10 h-10 rounded-lg object-cover ring-2 ring-indigo-200" src={genre.image_background} alt={genre.name} />

                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">{genre.name}</p>
                </div>
            </a>
        ))}
    </>
  )
}

export default GenresList