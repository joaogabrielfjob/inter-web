import { MatchCard } from './MatchCard';
import { Match } from '../types';

export type MatchesProps = {
  matches: Match[]
}

export function Matches({ matches }: MatchesProps) {
  return (
    <div className='container mx-auto grid grid-cols-(--auto-fill) gap-5 py-12'>
      {matches.map(match => <MatchCard key={match.id} { ...match } />)}
    </div>
  );
}
