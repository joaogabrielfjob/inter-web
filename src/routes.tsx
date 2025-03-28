import { createBrowserRouter } from 'react-router-dom';
import { Matches } from './pages/Matches';
import { Results } from './pages/Results';
import { Layout } from './components/Layout';
import { fetchMatches } from './services/match_service';
import { fetchResults } from './services/result_service';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { 
        path: '/',
        element: <Matches />,
        loader: fetchMatches
      },
      { 
        path: '/resultados',
        element: <Results />,
        loader: fetchResults
      },
      { 
        path: '*',
        element: <Matches />,
        loader: fetchMatches
      },
    ],
  },
]);
