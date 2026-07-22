import ApiClient from '../services/api-client'
import GameCard from './GameCard';
import { useLocation } from 'react-router-dom';
import GameCardSkeleton from './GameCardSkeleton';
import type { Platform } from './PlatformsList';
import { useEffect, useState } from 'react';

export interface Game {
    id: number;
    name: string;
    background_image: string;
    rating: number;
    description: string;
    platforms: { platform: Platform }[];
}

export interface FetchGamesResponse {
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const location = useLocation();
    
    useEffect(() => {
        setLoading(true);
        ApiClient.get<FetchGamesResponse>(`/games${location.search}`)
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
        }, [location]);

    return (
        <>
            <div className="flex flex-wrap">
                {error && <p>Error: {error}</p>}
                {loading && <GameCardSkeleton />}
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </>
    )
}

export default GameGrid