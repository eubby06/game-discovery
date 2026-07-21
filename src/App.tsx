import './App.css'
import GameGrid from './components/GameGrid'

function App() {

  return (
    <>
      <div className="flex flex-col">
        <header className="bg-blue-600 text-white p-4 h-16 flex items-center">
          <span className="font-semibold">Game Discovery</span>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <aside className="p-2 bg-gray-800">
            <nav className="space-y-1">
              <a>Homsdfsdfe</a>
            </nav>
          </aside>

          <main className="p-6 bg-gray-50 flex">
            <GameGrid />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
