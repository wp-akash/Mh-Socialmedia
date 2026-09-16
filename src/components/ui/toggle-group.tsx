import * as React from 'react';

type ToggleGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  type?: 'single' | 'multiple';
  size?: string;
};
export function ToggleGroup({ children, ...props }: ToggleGroupProps) {
  return <div {...props}>{children}</div>;
}

type ToggleGroupItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
  'aria-label'?: string;
};
export function ToggleGroupItem({ children, ...props }: ToggleGroupItemProps) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}