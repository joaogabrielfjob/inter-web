import { createBrowserRouter } from 'react-router-dom';
import { Matches } from './pages/Matches';
import { Results } from './pages/Results';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Matches />
  },
  {
    path: '/resultados',
    element: <Results />
  },
  {
    path: '*',
    element: <Matches />
  },
])