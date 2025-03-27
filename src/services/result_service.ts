import { Match } from '../types'
import { client } from './client'

const fetchResults = async () => {
  try {
    const { data } = await client.get<Match[]>('/result')

    return data
  } catch(exception) {
    console.error('Failed to fetch results', exception)

    return []
  }
}

export { fetchResults }