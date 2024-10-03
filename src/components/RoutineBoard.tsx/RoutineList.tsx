import { useRoutineList } from 'queries/useRoutineList';
import RoutineItem from './RoutineItem';

export default function RoutineList() {
  const { data: RoutineList } = useRoutineList();
  return (
    <div className={'flex flex-col gap-3 py-3'}>
      {RoutineList?.map((routine) => <RoutineItem key={routine.id} routineId={routine.id} text={routine.name} />)}
    </div>
  );
}
