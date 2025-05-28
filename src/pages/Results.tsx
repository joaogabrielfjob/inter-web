import { ResultCard } from '../components/ResultCard';
import { Select } from '@/components/Select';
import { useState } from 'react';
import { generateMonths } from '@/utils/monthUtils';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { fetchResultsFilter } from '@/services/result_filter_service';
import { generateYears } from '@/utils/yearUtils';
import { fetchResults } from '@/services/result_service';
import { useLoading } from '@/hooks/use-loading';
import { ResultsParams } from '@/services/types';
import { useSearchParams } from 'react-router-dom';
import { ComboBox } from '@/components/ComboBox';

import ballImg from '@/assets/ball.png';

export function Results() {
  const years = generateYears();
  const months = generateMonths();

  const [searchParams, setSearchParams] = useSearchParams();
  const [{ year, month, league, opponent }, setFilter] = useState<ResultsParams>({
    year: searchParams.get('ano') || '',
    month: searchParams.get('mes') || '',
    league: searchParams.get('campeonato') || '',
    opponent: searchParams.get('time') || ''
  });

  const { data: filters, fetchStatus: filterState } = useQuery({
    queryKey: ['filters'],
    queryFn: fetchResultsFilter
  })

  const { data: results, fetchStatus: resultsState, refetch } = useQuery({
    queryKey: ['results'],
    queryFn: async () => await fetchResults({ year, month, league, opponent })
  })

  useLoading([filterState, resultsState])

  const handleChange = (key: keyof ResultsParams) => {
    return (value: string) => setFilter(prev => ({ ...prev, [key]: value }));
  }

  const handleSearch = () => {
    const params = {
      ...(year ? { ano: year } : {}),
      ...(month ? { mes: month } : {}),
      ...(league ? { campeonato: league } : {}),
      ...(opponent ? { time: opponent } : {})
    };

    refetch();
    setSearchParams(params);
  }

  return (
    <div className='container mx-auto py-12'>
      <div className='container mx-auto flex flex-row flex-wrap justify-center lg:justify-end gap-7 py-12'>
        <div className='w-21'>
          <Select
            data={years}
            placeholder='Ano'
            onChange={handleChange('year')}
            value={year} />
        </div>

        <div className='w-21'>
          <Select
            data={months}
            placeholder='Mês'
            onChange={handleChange('month')}
            value={month} />
        </div>

        <div className='w-47'>
          <ComboBox
            data={filters?.opponents ?? []}
            placeholder='Times'
            onChange={handleChange('opponent')}
            value={opponent}
          />
        </div>

        <div className='w-47'>
          <Select
            data={filters?.leagues ?? []}
            placeholder='Campeonato'
            onChange={handleChange('league')}
            value={league} />
        </div>

        <Button
          size='icon'
          className='w-10 h-10 bg-red-500 text-white hover:bg-red-600 cursor-pointer'
          onClick={handleSearch}
        >
          <SearchIcon />
        </Button>
      </div>

      <div className={results?.length ? 'container mx-auto grid grid-cols-(--auto-fill) gap-5 py-12' : 'flex flex-1 min-h-[60vh] items-center justify-center w-full py-24'}>
        { results?.length ? 
          (
            results.map(result => <ResultCard key={result.id} {...result} />)
          ) : 
          (
            <div className='flex flex-col items-center justify-center w-full'>
              <img src={ballImg} className='w-24 h-24 mb-4' />
  
              <span className='text-xl'>Nenhum jogo encontrado</span>
            </div>
          )
        }
      </div>
    </div>
  );
}
