import { Match } from '../types';
import { MatchCard } from '../components/MatchCard';
import { useLoaderData } from 'react-router';

export function Matches() {
  const matches = useLoaderData<Match[]>();

  return (
    <div className='container mx-auto grid grid-cols-(--auto-fill) gap-5 py-12'>
      {matches.map(match => <MatchCard key={match.id} { ...match } />)}
    </div>
  )
}
