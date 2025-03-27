import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Match } from '../types';
import { ResultCard } from '../components/ResultCard';
import { fetchResults } from '../services/result_service';

export function Results() {
  const [results, setResults] = useState<Match[]>([]);

  useEffect(() => { fetchResults().then(setResults); }, []);
  
  return (
    <div className='z-[1] flex flex-grow flex-col'>
      <Header />

      <div className='container mx-auto grid grid-cols-(--auto-fill) gap-5 py-12'>
        {results.map(match => <ResultCard key={match.id} { ...match } />)}
      </div>
    </div>
  );
}
