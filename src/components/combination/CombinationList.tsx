import { useCombinationList } from 'queries/useCombinationList';

interface CombinationListProps {
  linkedRoutineId: string;
}

export default function CombinationList({ linkedRoutineId }: CombinationListProps) {
  const { data: CombinationList } = useCombinationList(linkedRoutineId as string);

  console.log('CombinationList::', CombinationList);

  return <div>{JSON.stringify(CombinationList)}</div>;
}
