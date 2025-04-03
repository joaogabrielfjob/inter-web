import { client } from './client'
import { ResultsFilter } from './types'

const fetchResultsFilter = async () => {
  try {
    const { data } = await client.get<ResultsFilter>('/result/filter')
    
    return data
  } catch(exception) {
    console.error('Failed to fetch results filter', exception)

    return { leagues: [], opponents: [] }
  }
}

export { fetchResultsFilter }
