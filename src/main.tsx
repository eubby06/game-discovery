import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import Home from './pages/Home';
import About from './pages/About';
import Games from './pages/Games';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // Matches "/"
        element: <Home />,
      },
      {
        path: "about", // Matches "/about"
        element: <About />,
      },
      {
        path: "games", // Matches "/games"
        element: <Games />
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
