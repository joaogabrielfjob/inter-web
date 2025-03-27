import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { Results } from './pages/Results';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/resultados',
    element: <Results />
  },
  {
    path: '*',
    element: <Home />
  },
])