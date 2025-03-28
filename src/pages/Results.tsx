import { Match } from '../types';
import { ResultCard } from '../components/ResultCard';
import { useLoaderData } from 'react-router-dom';

export function Results() {
  const results = useLoaderData<Match[]>();
  
  return (
    <div className='container mx-auto grid grid-cols-(--auto-fill) gap-5 py-12'>
      {results.map(match => <ResultCard key={match.id} { ...match } />)}
    </div>
  );
}
