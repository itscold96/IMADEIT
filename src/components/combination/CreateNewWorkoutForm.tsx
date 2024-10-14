//TODO: linked routine id를 props로 받아서 supabase에 추가 해야함, 모달 높이가 모바일에서 너무 큼

import { useToggle } from 'hooks/useToggle';
import ExerciseForm from './ExerciseForms';
import TabataForm from './TabataForm';

export default function CreateNewWorkoutForm() {
  const { toggleValue, toggleDispatch } = useToggle();

  return (
    <div>
      <h4 className={'modal-title pb-5'}>{`새로운 ${toggleValue ? '운동' : '타바타'} 추가`}</h4>
      <div className={'flex gap-3 pb-4'}>
        <button onClick={() => toggleDispatch({ type: 'on' })} className={'button-primary'}>
          일반 운동
        </button>
        <button onClick={() => toggleDispatch({ type: 'off' })} className={'button-primary'}>
          타바타 운동
        </button>
      </div>
      {toggleValue ? <ExerciseForm /> : <TabataForm />}
    </div>
  );
}
