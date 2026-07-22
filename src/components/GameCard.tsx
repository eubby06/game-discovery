import type { Game } from './GameGrid';
import PlatformsList from './PlatformsList';

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 flex">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col w-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <img className="w-full h-56 object-cover" src={game.background_image} alt={game.name} />
                
                <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-teal-800 bg-teal-50 rounded-full mb-3">Rating: {game.rating}</span>
                    <h2 className="text-xl font-bold text-gray-900 leading-snug">{game.name}</h2>
                    <PlatformsList platforms={game.platforms} />
                </div>
                <div className="mt-6">
                    <button className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm rounded-lg shadow-md transition-colors duration-200">Read More</button>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default GameCard