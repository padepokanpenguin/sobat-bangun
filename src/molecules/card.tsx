import cn from 'classnames';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn('p-4 border border-gray-300 rounded-lg', className)}>
      {children}
    </div>
  );
}
