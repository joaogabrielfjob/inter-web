export type Match = {
  id?: number;
  opponent: string;
  location: string;
  league: string;
  date: Date;
  emblem: string;
  interGoals: number;
  opponentGoals: number;
}

export type Combo = {
  value: string;
  label: string;
}
