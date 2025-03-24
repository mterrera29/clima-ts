import { ReactNode } from 'react';

export default function Alert({ children }: { children: ReactNode }) {
  return (
    <div style={{ alignSelf: 'center', justifySelf: 'center' }}>{children}</div>
  );
}
