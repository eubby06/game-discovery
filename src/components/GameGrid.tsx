import React, { useEffect, useState } from 'react'
import ApiClient from '../services/api-client'
import GameCard from './GameCard';

export interface Game {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    description: string;
}

export interface FetchGamesResponse {
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        ApiClient.get<FetchGamesResponse>("/games")
            .then(response => {
                console.log(response.data);
                setGames(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching games:", error);
                setError("Failed to fetch games");
            })
            .finally(() => {
                setLoading(false);
            });
        }, []);

    return (
        <>
            <div className="flex flex-wrap">
                {error && <p>Error: {error}</p>}
                {loading && <p>Loading...</p>}
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </>
    )
}

export default GameGrid