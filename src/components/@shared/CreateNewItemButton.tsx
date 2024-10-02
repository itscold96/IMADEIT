import { Plus } from 'lucide-react';

interface CreateNewItemButtonProps {
  text: string;
  onCreateClick: () => void;
}

export default function CreateNewItemButton({ text, onCreateClick }: CreateNewItemButtonProps) {
  return (
    <button onClick={onCreateClick} className={'flex gap-3 items-center w-full'}>
      <div className={'flex justify-center items-center h-16 min-w-16 bg-zinc-800 rounded-md '}>
        <Plus className={'text-red-500'} size={36} strokeWidth={1.8} />
      </div>
      <div className={'flex items-center text-red-500 text-lg border-b-[0.1px] h-16 w-full border-zinc-600'}>
        {text}
      </div>
    </button>
  );
}
