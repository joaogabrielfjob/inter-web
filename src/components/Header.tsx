import inter from '../assets/inter.svg'

export function Header() {
  return (
    <header className='container mx-auto flex items-center justify-between px-4 py-8'>
      <a href='/'>
        <img src={inter} className='img-fluid float-start' />
      </a>
    </header>
  );
}
