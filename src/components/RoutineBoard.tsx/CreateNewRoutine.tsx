import CreateNewItemButton from 'components/@shared/CreateNewItemButton';

export default function CreateNewRoutine() {
  const handleCreateClick = () => {
    console.log('새로운 루틴 생성 버튼 클릭');
  };

  return <CreateNewItemButton text={'새로운 루틴 추가하기..'} onCreateClick={handleCreateClick} />;
}
