import { Match } from '../types'
import { client } from './client'
import { ResultsParams } from './types'

const fetchResults = async (params: ResultsParams) => {
  try {
    const { data } = await client.get<Match[]>('/result', { params })

    return data
  } catch(exception) {
    console.error('Failed to fetch results', exception)

    return []
  }
}

export { fetchResults }