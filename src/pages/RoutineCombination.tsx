import RootLayout from 'components/@shared/RootLayout';
import CombinationList from 'components/combination/CombinationList';
import { Cog, Play } from 'lucide-react';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

export default function RoutineCombination() {
  const { id } = useParams();

  return (
    <RootLayout>
      <div className={'flex gap-3 text-red-500 text-lg h-14'}>
        <button className={'paly-edit-button'}>
          <Play size={25} strokeWidth={2.2} />
          시작
        </button>
        <button className={'paly-edit-button'}>
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
