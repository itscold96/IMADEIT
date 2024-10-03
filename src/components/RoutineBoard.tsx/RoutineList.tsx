import { useRoutineList } from 'queries/useRoutineList';

export default function RoutineList() {
  const { data } = useRoutineList();
  return (
    <div>
      <div>RoutineList</div>
    </div>
  );
}
