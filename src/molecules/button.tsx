import cn from 'classnames';

interface ButtonProps {
  value: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ value, onClick, className }: ButtonProps) {
  return (
    <button className={cn(' text-sm', className)} onClick={onClick}>
      {value}
    </button>
  );
}
