import GameGrid from '../components/GameGrid'
import GenresList from '../components/GenresList'

const Games = () => {
  return (
    <>
        <aside className="p-2 bg-gray-800">
        <nav className="space-y-1">
            <GenresList />
        </nav>
        </aside>

        <main className="p-6 flex">
            <GameGrid />
        </main>
    </>
  )
}

export default Games