import RootLayout from 'components/@shared/RootLayout';
import CreateNewRoutine from 'components/RoutineBoard.tsx/CreateNewRoutine';
import RoutineList from 'components/RoutineBoard.tsx/RoutineList';
import { Search } from 'lucide-react';
import { Suspense } from 'react';

export default function RoutineBoard() {
  return (
    <RootLayout>
      <h1 className={'text-4xl font-bold'}>루틴 리스트</h1>

      <section className={'relative my-5'}>
        <Search className={'absolute top-1.5 left-2 text-zinc-600'} />
        <input className={'bg-zinc-800  rounded-md h-9 w-full pl-10 outline-none active:bg-zinc-900'} />
      </section>
      <CreateNewRoutine />

      <Suspense fallback={'loading...'}>
        <RoutineList />
      </Suspense>
    </RootLayout>
  );
}
