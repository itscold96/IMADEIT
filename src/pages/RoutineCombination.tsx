import RootLayout from 'components/@shared/RootLayout';
import CombinationList from 'components/combination/CombinationList';
import { ChevronLeft, Cog, Play } from 'lucide-react';
import { Suspense } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

export default function RoutineCombination() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');

  return (
    <RootLayout>
      <div className={'flex gap-1 pb-4'}>
        <Link to={`/routineboard`}>
          <ChevronLeft size={38} strokeWidth={2} className={'text-red-500'} />
        </Link>
        <div className={'text-title truncate'}>{name}</div>
      </div>

      <div className={'flex gap-3'}>
        <button className={'button-primary'}>
          <Play size={25} strokeWidth={2.2} />
          시작
        </button>
        <button className={'button-primary'}>
          <Cog size={25} strokeWidth={2.2} />
          편집
        </button>
      </div>

      <Suspense fallback={<>loading...</>}>
        <CombinationList linkedRoutineId={id as string} />
      </Suspense>
    </RootLayout>
  );
}
