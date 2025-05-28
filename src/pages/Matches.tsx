import { MatchCard } from '../components/MatchCard';
import { fetchMatches } from '@/services/match_service';
import { useLoading } from '@/hooks/use-loading';
import { useQuery } from '@tanstack/react-query';

import ballImg from '@/assets/ball.png';

export function Matches() {
  const { data: matches, fetchStatus } = useQuery({
    queryKey: ['matches'],
    queryFn: async () => await fetchMatches()
  })

  useLoading([fetchStatus])

  return (
    <div className={matches?.length ? 'container mx-auto grid grid-cols-(--auto-fill) gap-5 py-12' : 'flex flex-1 min-h-[60vh] items-center justify-center w-full py-24'}>
      { matches?.length ? 
        (
          matches.map(match => <MatchCard key={match.id} {...match} />)
        ) : 
        (
          <div className='flex flex-col items-center justify-center w-full'>
            <img src={ballImg} className='w-24 h-24 mb-4' />

            <span className='text-xl'>Nenhum jogo encontrado</span>
          </div>
        )
      }
    </div>
  )
}
