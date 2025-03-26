import { Match } from '../types'
import { client } from './client'

const fetchMatches = async () => {
  try {
    const { data } = await client.get<Match[]>('/match')

    return data
  } catch(exception) {
    console.error('Failed to fetch matches', exception)

    return []
  }
}

export { fetchMatches }