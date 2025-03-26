import { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { Match } from '../types';
import { Matches } from './Matches';
import { fetchMatches } from '../services/match_service';

export function Home() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => { fetchMatches().then(setMatches); }, []);

  return (
    <div className='z-[1] flex flex-grow flex-col'>
      <Header />

      <Matches matches={ matches } />
    </div>
  )
}
