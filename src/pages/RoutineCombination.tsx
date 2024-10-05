import CombinationList from 'components/combination/CombinationList';
import { Suspense } from 'react';
import { useParams } from 'react-router-dom';

export default function RoutineCombination() {
  const { id } = useParams();

  return (
    <div>
      RoutineCombination id: {id}
      <Suspense fallback={<>loading...</>}>
        <CombinationList linkedRoutineId={id as string} />
      </Suspense>
    </div>
  );
}
