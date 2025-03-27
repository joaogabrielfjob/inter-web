import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Match } from '../types';
import { fetchMatches } from '../services/match_service';
import { MatchCard } from '../components/MatchCard';

export function Matches() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => { fetchMatches().then(setMatches); }, []);

  return (
    <div className='z-[1] flex flex-grow flex-col'>
      <Header />

      <div className='container mx-auto grid grid-cols-(--auto-fill) gap-5 py-12'>
        {matches.map(match => <MatchCard key={match.id} { ...match } />)}
      </div>
    </div>
  )
}
