import { Header } from '../components/Header';
import { Matches } from './Matches';

export function Home() {
  const match1 = {
    id: '72cc5',
    opponent: 'Bahia',
    location: 'Fonte Nova',
    league: 'Copa Libertadores',
    date: new Date(),
    emblem: 'https://www.placardefutebol.com.br/images/teams/bahia.png'
  };

  const match2 = {
    id: 'b47cc',
    opponent: 'Bahia',
    location: 'Fonte Nova',
    league: 'Copa Libertadores',
    date: new Date(),
    emblem: 'https://www.placardefutebol.com.br/images/teams/bahia.png'
  };

  const matches = [ match1, match2 ];

  return (
    <div className='z-[1] flex flex-grow flex-col'>
      <Header />

      <Matches matches={ matches } />
    </div>
  )
}
