import { useParams } from 'react-router-dom';

export default function RoutineCombination() {
  const { id } = useParams();
  return <div>RoutineCombination id: {id}</div>;
}
