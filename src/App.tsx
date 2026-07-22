import './App.css'
import { Link, Outlet } from 'react-router-dom';
import ToggleSwitch from './components/ToggleSwitch';

function App() {

  return (
    <>
      <div className="flex flex-col">
        <header className="bg-blue-600 text-white p-4 h-16 flex items-center">
          <Link to="/games">Game Discovery</Link>
          <div className="ml-auto">
            <ToggleSwitch />
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
