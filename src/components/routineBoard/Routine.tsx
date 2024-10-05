import { ListVideo } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RoutineProps {
  routineId: string;
  text: string;
}

export default function Routine({ routineId, text }: RoutineProps) {
  return (
    <Link to={`/routine/${routineId}`} className={'item-container'}>
      <div className={'emoji-wrapper bg-zinc-800'}>
        <ListVideo className={'text-red-500'} size={36} strokeWidth={1.8} />
      </div>
      <div className={'item-text-wrapper'}>{text}</div>
    </Link>
  );
}
