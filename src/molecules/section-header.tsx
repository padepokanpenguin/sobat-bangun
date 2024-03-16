import cn from 'classnames';

interface SectionHeaderProps {
  className?: string;
  title: string;
}

export default function SectionHeader({
  className,
  title,
}: SectionHeaderProps) {
  return <h2 className={cn('text-2xl font-semibold', className)}>{title}</h2>;
}
