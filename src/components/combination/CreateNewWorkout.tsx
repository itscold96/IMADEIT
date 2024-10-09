import CreateNewItemButton from 'components/@shared/CreateNewItemButton';
import { useToggle } from 'hooks/useToggle';

export default function CreateNewWorkout() {
  const { toggleValue, toggleDispatch } = useToggle();

  return (
    <>
      <CreateNewItemButton text={'새로운 운동 추가하기..'} onCreateClick={() => toggleDispatch({ type: 'switch' })} />
    </>
  );
}
