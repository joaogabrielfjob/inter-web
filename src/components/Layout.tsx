import { Outlet } from "react-router-dom";
import { Header } from './Header';
import { useNProgress } from '../hooks/use-nprogress';

export function Layout() {
  useNProgress();

  return (
    <div className='z-[1] flex flex-grow flex-col'>
      <Header />
      <Outlet />
    </div>
  );
};
