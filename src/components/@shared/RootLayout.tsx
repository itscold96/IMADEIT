import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className={'flex justify-center py-5 px-3'}>
      <div className={'w-full max-w-[768px]'}>{children}</div>
    </main>
  );
}
