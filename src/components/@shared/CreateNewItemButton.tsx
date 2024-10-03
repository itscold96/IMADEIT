import { Plus } from 'lucide-react';

interface CreateNewItemButtonProps {
  text: string;
  onCreateClick: () => void;
}

export default function CreateNewItemButton({ text, onCreateClick }: CreateNewItemButtonProps) {
  return (
    <button onClick={onCreateClick} className={'item-container'}>
      <div className={'emoji-wrapper'}>
        <Plus className={'text-red-500'} size={36} strokeWidth={1.8} />
      </div>
      <div className={'item-text-wrapper text-red-500'}>{text}</div>
    </button>
  );
}
