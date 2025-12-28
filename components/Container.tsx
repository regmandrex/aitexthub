import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-4xl mx-auto px-4 py-6 md:py-10 ${className}`.trim()}>
      {children}
    </div>
  );
}
