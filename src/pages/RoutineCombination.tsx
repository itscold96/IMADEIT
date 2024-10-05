import RootLayout from 'components/@shared/RootLayout';
import CombinationList from 'components/combination/CombinationList';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

export default function RoutineCombination() {
  const { id } = useParams();

  return (
    <RootLayout>
      RoutineCombination id: {id}
      <Suspense fallback={<>loading...</>}>
        <CombinationList linkedRoutineId={id as string} />
      </Suspense>
    </RootLayout>
  );
}
