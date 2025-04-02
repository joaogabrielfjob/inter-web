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

export function Results() {
  const years = generateYears();
  const months = generateMonths();

  const [, setSearchParams] = useSearchParams();
  const [{ year, month, league }, setFilter] = useState<ResultsParams>({ year: '', month: '', league: '' });

  const { data: filters, fetchStatus: filterState } = useQuery({
    queryKey: ['filters'],
    queryFn: fetchResultsFilter
  })

  const { data: results, fetchStatus: resultsState, refetch } = useQuery({
    queryKey: ['results'],
    queryFn: async () => await fetchResults({ year, month, league })
  })

  useLoading([filterState, resultsState])

  const handleChange = (key: keyof ResultsParams) => {
    return (value: string) => setFilter(prev => ({ ...prev, [key]: value }));
  }

  const handleSearch = () => {
    const params: ResultsParams = {
      ...(year ? { year } : {}),
      ...(month ? { month } : {}),
      ...(league ? { league } : {})
    };

    refetch();
    setSearchParams(params);
  }

  return (
    <div className='container mx-auto py-12'>
      <div className='container mx-auto flex flex-row justify-center lg:justify-end gap-7 py-12'>
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
          <Select
            data={filters?.leagues ?? []}
            placeholder='Campeonato'
            onChange={handleChange('league')}
            value={league} />
        </div>

        <div>
          <Button
            size='icon'
            className='w-10 h-10 bg-red-500 text-white hover:bg-red-600 cursor-pointer'
            onClick={handleSearch}
          >
            <SearchIcon />
          </Button>
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-(--auto-fill) gap-5 py-12'>
        {results?.map(result => <ResultCard key={result.id} {...result} />)}
      </div>
    </div>
  );
}
