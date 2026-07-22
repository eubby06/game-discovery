import './App.css'
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="flex flex-col">
        <header className="bg-blue-600 text-white p-4 h-16 flex items-center">
          <span className="font-semibold">Game Discovery</span>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>| <Link to="/games">Games</Link>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
