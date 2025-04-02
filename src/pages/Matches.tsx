import { MatchCard } from '../components/MatchCard';
import { fetchMatches } from '@/services/match_service';
import { useLoading } from '@/hooks/use-loading';
import { useQuery } from '@tanstack/react-query';

export function Matches() {
  const { data: matches, fetchStatus } = useQuery({
    queryKey: ['matches'],
    queryFn: async () => await fetchMatches()
  })

  useLoading([fetchStatus])

  return (
    <div className='container mx-auto grid grid-cols-(--auto-fill) gap-5 py-12'>
      {matches?.map(match => <MatchCard key={match.id} { ...match } />)}
    </div>
  )
}
