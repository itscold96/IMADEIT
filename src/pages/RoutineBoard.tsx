import RootLayout from 'components/@shared/RootLayout';
import { Plus, Search } from 'lucide-react';

export default function RoutineBoard() {
  return (
    <RootLayout>
      <h1 className={'text-4xl font-bold'}>루틴 리스트</h1>

      <section className={'relative my-5'}>
        <Search className={'absolute top-1.5 left-2 text-zinc-600'} />
        <input className={'bg-zinc-800  rounded-md h-9 w-full pl-10 outline-none active:bg-zinc-900'} />
      </section>
      <section className={'flex gap-3 items-center'}>
        <div className={'flex justify-center items-center h-16 min-w-16 bg-zinc-800 rounded-md '}>
          <Plus className={'text-red-500'} size={36} strokeWidth={1.8} />
        </div>
        <div className={'flex items-center text-red-500 text-lg border-b-[0.1px] h-16 w-full border-zinc-600'}>
          새로운 루틴 추가하기..
        </div>
      </section>
    </RootLayout>
  );
}
