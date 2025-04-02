import { Combo } from '@/types';

export type ResultsFilter = {
  leagues: Combo[];
}

export type ResultsParams = {
  year?: string;
  month?: string;
  league?: string;
}