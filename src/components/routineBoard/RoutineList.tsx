import { useRoutineList } from 'queries/useRoutineList';
import Routine from './Routine';

export default function RoutineList() {
  const { data: RoutineList } = useRoutineList();
  return (
    <div className={'flex flex-col gap-3 py-3'}>
      {RoutineList?.map((routine) => <Routine key={routine.id} routineId={routine.id} text={routine.name} />)}
    </div>
  );
}
