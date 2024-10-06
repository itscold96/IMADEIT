import { Dumbbell, TimerReset } from 'lucide-react';
import { CombinationType } from 'types/combination';

interface CombinationProps {
  combination: CombinationType;
}

export default function Combination({ combination }: CombinationProps) {
  const { name, type } = combination;

  return (
    <button className={'item-container'}>
      <div className={'emoji-wrapper bg-zinc-800'}>
        <Icon type={type} />
      </div>
      <div className={'flex flex-col items-start justify-center border-b-[0.1px] h-16 w-full border-zinc-600 truncate'}>
        <p className={'text-lg'}>{name}</p>
        <Details combination={combination} />
      </div>
    </button>
  );
}

// 재사용될 컴포넌트는 아니지만
// Combination 컴포넌트 내부에서 섞여있을 경우, 가독성이 떨어진다고 판단하여
// 동일 파일 내부에서 컴포넌트로 분리
function Icon({ type }: { type: string }) {
  return type === 'exercise' ? (
    <Dumbbell className="text-red-500" size={28} strokeWidth={1.8} />
  ) : (
    <TimerReset className="text-red-500" size={28} strokeWidth={1.8} />
  );
}

function Details({ combination }: { combination: CombinationType }) {
  return (
    <section className={'flex text-sm text-red-500 gap-2'}>
      <p>sets: {combination.sets}</p>
      {/* 삼항 연산자보다 가독성이 좋다고 생각 */}
      {combination.type === 'exercise' && <p>reps: {combination.reps}</p>}
      {combination.type === 'tabata' && (
        <>
          <p>workoutTime: {combination.workout_sec}s</p>
          <p>restTime: {combination.rest_sec}s</p>
        </>
      )}
    </section>
  );
}
